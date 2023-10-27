import {
  authInitialState,
  selectCredentials,
  setCredentials,
} from '@/src/features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { PropsWithChildren } from '@/src/types/global';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthProvider: NextPage<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [authorised, setAuthorised] = useState(true);
  const dispatch = useAppDispatch();
  const { is_email_confirmed, access, refresh } = useAppSelector((state) =>
    selectCredentials(state)
  );

  const checkIsAuth = () => {
    if (access !== null) {
      setAuthorised(true);
    } else {
      setAuthorised(false);
      dispatch(setCredentials(authInitialState));
    }
  };

  useEffect(() => {
    checkIsAuth();
  }, [access]);

  useEffect(() => {
    if (!authorised) {
      router.replace('/login');
    }
  }, [authorised]);
  return <>{children}</>;
};

export default AuthProvider;
