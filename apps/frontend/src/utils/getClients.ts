import { Client } from '@/types/client';

export async function getClients(params: Record<string, string> = {}): Promise<Client[]> {
  const query = new URLSearchParams(params).toString();
  const url = `http://localhost:8080/clients${query ? `?${query}` : ''}`;
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch clients: ${res.statusText}`);
  }

  return res.json();
}
