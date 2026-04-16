import { USER_AGENT } from './config.ts';

export async function tryFetch(url: string): Promise<Response | null> {
  try {
    return await fetch(url, {
      headers: { 'user-agent': USER_AGENT },
      redirect: 'follow',
    });
  } catch {
    return null;
  }
}

export async function fetchWithRetry(url: string, attempts = 3): Promise<Response> {
  let lastError: unknown = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': USER_AGENT },
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status} for ${url}`);
      }

      return response;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
