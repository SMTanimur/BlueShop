import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { withAdminRoute } from "src/hoc/withAdminRoute";
import { useSelector } from "react-redux";

function Admin() {

  const { user } = useSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if ( !user.isAdmin) {
      router.push('/');
    }else {
      router.push('/admin')
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>greenshop | Admin Panel</title>
      </Head>
      <div className="heightFixAdmin px-6 flex items-center justify-center">
        <div className="max-w-screen-xs mx-auto lg:text-lg xs:text-base text-sm text-center font-medium text-blue-light">
          Welcome to Admin Panel
          <br />
          Wait while redirecting to Dashboard
        </div>
      </div>
    </>
  );
}


export default Admin
