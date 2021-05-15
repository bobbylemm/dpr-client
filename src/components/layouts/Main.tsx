import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authSelector, isLoggedIn, logOut } from "../../redux/authSlice";

import { Navbar } from "../reusable";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn: loggedIn } = useSelector(authSelector);

  useEffect(() => {
    (async () => {
      await dispatch(isLoggedIn());
    })();
  }, []);

  useEffect(() => {
    if (!loggedIn) history.push("/login");
  }, [loggedIn]);

  return (
    <div>
      <Navbar logout={() => dispatch(logOut())} />
      {children}
    </div>
  );
};

export default MainLayout;
