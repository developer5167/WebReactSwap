import axios from "axios";
const apiUrl = 'http://192.168.31.63:4000';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
});


export const addUser = async(endPoint:any,data:any)=>{ debugger
    try {
        const response = await axiosInstance.post(endPoint, data);
        return response.data;
      } catch (error) {
        console.error("API Error: ", error);
        throw error;
      }
}
