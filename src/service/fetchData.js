export default async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Invalid Response: ${response}. Try again`)
    }
    return response.json()
}