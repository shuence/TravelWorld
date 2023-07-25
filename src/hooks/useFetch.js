// hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

const useFetch = (endpoint, queryParams) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
          params: queryParams, // Pass the query parameters here
        });
        setData(response.data.data); // Store the "data" array from the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
