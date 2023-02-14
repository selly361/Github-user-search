import { useEffect, useState } from "react";

import { GithubUser } from "types/github-data";
import axios from "axios";

const api = "https://api.github.com/users/";

export const useFetch = (query: string = "selly361") => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<null | true>(null);

  const fetchData = async (query: string) => {
    
    try {
      setLoading(true);
      setError(null)

      const { data } = await axios(`${api}${query}`);

      if (data.message) throw new Error("Not Found");
      

      setUser(data)
    } catch (error) {
        setError(true)
        setUser(null)
    }

    finally {
        setLoading(false)
        
    }
  };



  useEffect(() => {
    fetchData(query)
  }, [])

  return { user, loading, error, fetchData };
};
