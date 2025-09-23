
const BASE_URL = 'http://localhost:3001';
const Fetcher = async(url) => {
    try {
        const res = await fetch(BASE_URL + url)
        const data = await res.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return empty array on error
    }
}

export default Fetcher