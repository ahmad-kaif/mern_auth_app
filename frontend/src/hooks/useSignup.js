import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import { sign } from 'jsonwebtoken';
import toast from 'react-hot-toast';

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const {authUser,setAuthUSer} = useAuthContext();
 
    const signup = async({fullname,username,password,confirmPassword,gender}) => {
        try {
            
        } catch (error) {
            toast.error(`Error in SignUp`, error.message);
        }finally{
            setLoading(false);
        }
    }

  return {loading,signup};
}

export default useSignup
