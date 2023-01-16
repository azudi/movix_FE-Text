import React, { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import AppLayout from "layouts/AppLayout";
import { auth } from "utils/firebase";
import toast, { Toaster } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "redux/mutateUsers/users";
import { getAuth, updateProfile } from "firebase/auth";
import { useInfoGetter } from "services/app-hook/getters/userInfoGetter";

interface Props {}

function Login(props: Props) {
  const {} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setisloading] = useState(false);
  const { user } = useInfoGetter();

  const getUserToLogIn = (val: any) => {
    setisloading(true);
    createUserWithEmailAndPassword(auth, val.email, val.password)
      .then(async (res) => {
        await writeUserData(res.user.uid, val.fullname);
      })
      .catch((error) => {
        const errorMsg = error.message.split("/")[1];
        toast.error(errorMsg.slice(0, -2).replace("-", " "));
      })
      .finally(() => setisloading(false));
  };

  const writeUserData = async (userId: number | string, name: string) => {
    const auth = getAuth();
    await updateProfile(auth.currentUser as any, {
      displayName: name,
    })
      .then((res) => {
        dispatch(isLoggedIn(true));
        navigate("/");
        localStorage.setItem("movix_user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorMsg = error.message.split("/")[1];
        toast.error(errorMsg.slice(0, -2).replace("-", " "));
      });
  };

  return (
    <AppLayout>
      <RegisterForm isLoading={isLoading} getUserInfo={getUserToLogIn} />
    </AppLayout>
  );
}

export default Login;
