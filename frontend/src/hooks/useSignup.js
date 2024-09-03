import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const {authUser,setAuthUSer} = useAuthContext();
  return (
    <>
    <div>

    </div>
      
    </>
  )
}

export default useSignup
