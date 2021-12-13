import { useEffect } from "react";

import Head from "next/head";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { attemptGetUserProfile } from "src/features/user/userAction";
import HeaderDashboard from "./Header/HeaderDeshboard";
import Header from "./Header";
import Footer from "./Footer";
import HeaderMobile from "./Header/HeaderMobile";

function Layout({ children,  }) {

  const dispatch = useDispatch();
  const { user: authUser } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.user);
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';

  useEffect(() => {
    if (authUser && !user) {
      dispatch(attemptGetUserProfile());
    }
  }, [dispatch, user]);
  

    return isAdmin? (
        <>
            
        <HeaderDashboard/>
          {children}
        
          </>
    ):(
      <>
        <Header />
        <HeaderMobile/>
        {children}
      <Footer />
  
      </>
    )
}

export default Layout;

