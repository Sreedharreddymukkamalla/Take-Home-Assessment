import { Client } from '@/types/client';

// Use environment variable for backend URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

export async function getClients(params: Record<string, string> = {}): Promise<Client[]> {
  const query = new URLSearchParams(params).toString();
  let url = `${BACKEND_URL}/clients`;
  if (query) {
    url += '?' + query;
  }
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch clients: ${res.statusText}`);
  }

  return res.json();
}
