export const API_BASE = 'https://your-backend-api.com';

export async function fetchData(endpoint: string) 
{ const res = await fetch(${API_BASE}${endpoint}); 
return res.json(); }