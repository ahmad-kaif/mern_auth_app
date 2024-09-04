import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import { sign } from 'jsonwebtoken';

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const {authUser,setAuthUSer} = useAuthContext();
 
    const signup = async({fullname,username,password,confirmPassword,gender}) => {

    }
  return {loading,signup};
}

export default useSignup
