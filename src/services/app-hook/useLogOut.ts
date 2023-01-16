import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "utils/firebase";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "redux/mutateUsers/users";
import { useDispatch } from "react-redux";




export default function useLogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logout = async () => {
    localStorage.removeItem('movix_user')
    dispatch(isLoggedIn(false));
    navigate('/')
    await signOut(auth);
  };

  return { logout };
}
