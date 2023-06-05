import React from 'react';
import { useQuery } from 'react-query';

// Define a function to fetch data from an API
const fetchData = async (): Promise<string> => {
  const response = await fetch(`url`);
  const data = await response.json();
  return data;
};

const useFetchData = (url: string) => {
  const { data, isLoading, error } = useQuery<string>('myData', fetchData);
};

export default useFetchData;
