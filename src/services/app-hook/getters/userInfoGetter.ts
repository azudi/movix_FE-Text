import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

export const  useInfoGetter = ()=> {
  const [user, setUser] = useState({
    displayName: '',
    email: "",
    uid: ""
  })


  
  const userLoggedIn = useSelector(
        (state: RootState) => state.userInfo,
      )

      useEffect(() => {
        const auth = getAuth();
      
       onAuthStateChanged(auth, async (user) => {
          setUser(user as any)
        });
      
      }, []);

      return { userLoggedIn , user }
}



