import axios from "axios";
export const project = 'http://localhost:3000/tarea';

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const createDataFetch = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const updateDataFetch = async (url: string, { arg }: any) => {
  const response = await axios.patch(url, arg);
  return response.data;
};

export const deleteDataFetch = async (url: string) => {
  const response = await axios.delete(url);
  return response.data;
};
