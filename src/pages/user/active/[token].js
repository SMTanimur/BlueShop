
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { attemptActivation } from 'src/features/auth/authAction';
const ActiveAccountScreen = () => {
  const dispatch = useDispatch();
  const { query, push } = useRouter();
  const token = query.token;
  useEffect(() => {
    if (token) {
      dispatch(attemptActivation(token));
      push('/');
    }
  }, [dispatch, token]);
  return null;
};

export default ActiveAccountScreen;
