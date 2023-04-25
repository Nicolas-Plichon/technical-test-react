/* MODELE
import axios from 'axios';
import { useEffect, useState } from 'react';

const useQuery = <TData>(url: string, initialValue: TData) => {
  const [data, setData] = useState<TData>(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
    setData,
  };
};

export default useQuery;
*/