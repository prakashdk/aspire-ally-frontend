import { useEffect, useState } from "react";
import fetchData from "../../service/fetchData";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        try {
            const json = fetchData(url)
            setData(json)
        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false)
        }

    }, [url])
    return { data, isLoading, error }
}