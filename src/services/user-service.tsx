import axios from "axios";
import Cookies from "js-cookie";
const apiUrl = 'http://172.20.10.3:4000';
// const {token}:any = Cookies.get("user")

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer ${token}"
    },
});

export const addUser = async(endPoint:any,data:any)=>{ 
    try {
        const response = await axiosInstance.post(endPoint, data);
        return response.data;
      } catch (error) {
        console.error("API Error: ", error);
        throw error;
      }
}

export const loginUserApi = async(endPoint:any,data:any)=>{ 
  try {
      const response = await axiosInstance.post(endPoint, data);
      return response.data;
    } catch (error) {
      console.error("API Error: ", error);
      throw error;
    }
}

export const logoutUser = async(endPoint:any,data:any)=>{ 
  try {
      const response = await axiosInstance.post(endPoint, data);
      return response.data;
    } catch (error) {
      console.error("API Error: ", error);
      throw error;
    }
}

