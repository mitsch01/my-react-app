export async function fetchAPI(path) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${path}`);
  if (!res.ok) throw new Error('API fetch failed');
  return res.json();
}