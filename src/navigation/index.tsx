import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import route from "./router";
import { useInfoGetter } from "services/app-hook/getters/userInfoGetter";
import stack from "./stack";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "redux/mutateUsers/users";
import NotFound from "components/widget/404";





const RootRoutes = () => {
  const { userLoggedIn , user} = useInfoGetter();
  const dispatch = useDispatch();


  const landing = route.filter((item, index) => {
    return item?.stack == stack.LANDING || item?.stack == stack.APP;
  });
  const auth = route.filter((item, index) => {
    return item?.stack != stack.LANDING || item?.stack == stack.APP;
  });

  // check if user is already saved to storage
  const getUser = JSON.parse(localStorage.getItem("movix_user") as string);
  if (getUser?.uid) {
    dispatch(isLoggedIn(true));
  }


  return (
    <BrowserRouter>
      <Routes>
        {
        (userLoggedIn.checkedUsers ? auth : landing).map((item) => {
          const { Page, route } = item;
          return <Route path={route} element={<Page />} />;
        })
        }
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
