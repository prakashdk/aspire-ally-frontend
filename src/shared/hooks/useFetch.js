import { useEffect, useState } from "react";
import fetchData from "../../service/fetchData";
import { makeUrl } from "../../service/makeUrl";

export default function useFetch(url, queryStringParams) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const urlObj = makeUrl(url, queryStringParams);
    async function getData() {
      try {
        const json = await fetchData(urlObj);
        setData(json);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
    // return ()=>{
    //   console.log("Use fetch closed");
    // }
  }, [url]);
  return { data, isLoading, error };
}
