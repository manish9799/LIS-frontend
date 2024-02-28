import axios from "axios";
import { baseURL } from "./configData";

export const GetData = async (url) => {
    try {
      const response = await axios.get(`${baseURL}${url}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let result = response.data
      return result;
    //   setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const postData = async (url,postData) => {
    try {
      const postResponse = await axios.post(`${baseURL}${url}`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST Response:', postResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const UpdateData = async (url,id,data) => {
    try {
      const updateResponse = await axios.put(`${baseURL}${url}/${id}`,data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST Response:', updateResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const DeleteData = async (url,id) => {
    try {
      const updateResponse = await axios.delete(`${baseURL}${url}/${id}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST Response:', updateResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };