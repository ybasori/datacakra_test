import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "./redux/types";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Tourist from "./pages/Tourist";
import TouristDetail from "./pages/Tourist/TouristDetail";
import { reAuthenticate, resetAuthLogin } from "./redux/actions/auth";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Navigate to="/login" /> },
];
const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/tourists", element: <Tourist /> },
  { path: "/tourists/:id", element: <TouristDetail /> },
  { path: "/login", element: <Navigate to="/profile" replace /> },
  { path: "/register", element: <Navigate to="/" replace /> },
  { path: "*", element: <NotFound /> },
];

function Routes() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: Reducers) => state);

  const [isReAuth, setIsReAuth] = useState(false);

  useEffect(() => {
    dispatch(reAuthenticate());
  }, [dispatch]);

  useEffect(() => {
    if (auth.authData !== null) {
      setIsReAuth(true);
    }
    if (auth.errorLogin !== null) {
      setIsReAuth(true);
      dispatch(resetAuthLogin());
    }
  }, [auth.authData, auth.errorLogin, dispatch]);

  return (
    <>
      {auth.authData && <Navbar />}
      {isReAuth && (
        <Switch>
          {(auth.authData !== null ? privateRoutes : routes).map(
            (item, index) => (
              <Route {...item} key={`route-${index + 1}`} />
            )
          )}
        </Switch>
      )}
    </>
  );
}

export default Routes;
