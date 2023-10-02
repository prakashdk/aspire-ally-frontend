export default async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Invalid Response: ${JSON.stringify(response)}. Try again`);
  }
  return response.json();
}
