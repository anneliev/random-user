import { useState, useEffect } from 'react';

const baseUrl = 'https://randomuser.me/api/';

export default function useFetch(quantity) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + quantity);
        console.log(baseUrl);
        if (response.ok) {
          const json = await response.json();
          setData(json);
          console.log(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [quantity]);

  return { data, error, loading };
}
