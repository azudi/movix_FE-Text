import React, { useState } from "react";
import LoginForm from "components/auth/LoginForm";
import AppLayout from "layouts/AppLayout";
import { auth } from "utils/firebase";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useInfoGetter } from "services/app-hook/getters/userInfoGetter";
import { isLoggedIn } from "redux/mutateUsers/users";
import { useNavigate } from "react-router-dom";

interface Props {}

function Login(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLoggedIn } = useInfoGetter();
  const [isLoading, setisloading] = useState(false);

  const loginUser = async (val: any) => {
    setisloading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        val.email,
        val.password
      );
      localStorage.setItem("movix_user", JSON.stringify(user.user));
      dispatch(isLoggedIn(true));
      navigate("/");
    } catch (err: any) {
      const errorMsg = err.message.split("/")[1];
      toast.error(errorMsg.slice(0, -2).replace("-", " "));
    } finally {
      setisloading(false);
    }
  };

  return (
    <AppLayout>
      <>
        <LoginForm isLoading={isLoading} loginUser={loginUser} />
      </>
    </AppLayout>
  );
}

export default Login;
