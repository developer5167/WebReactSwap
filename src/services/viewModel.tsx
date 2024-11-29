
import { useState } from 'react';
import { addUser } from '../services/user-service';

export const useUserViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const createUser = async (endPoint:any,request:any) => {
    setLoading(true);
    try {
      const user = await addUser(endPoint,request);
      setLoading(false);
      setData(user["message"])
    } catch (err:any) {
        console.log(err.message)
        setLoading(false);
      setError(err.message);
      setData(err.message)
    }
  };
  return { loading, error, createUser,data };
};
