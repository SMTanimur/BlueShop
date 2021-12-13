import { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import RedirectLoader from '@components/Shared/RedirectLoader';

export const withAdminRoute = Component => {
  const RequireAuthentication = props => {
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
      if (user && !user.isAdmin) {
        Router.push('/');
      }
    }, [user]);
    return user ? <Component {...props} /> : <RedirectLoader to='Home' />;
  };
  return RequireAuthentication;
};
