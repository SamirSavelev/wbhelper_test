'use client';

import { useLoginMutation } from '@/src/api/auth';
import { LoginRequestInterface } from '@/src/api/auth/types';
import {
  authInitialState,
  selectCredentials,
  setCredentials,
} from '@/src/features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import Button from '@/src/ui-kit/Button';
import Flex from '@/src/ui-kit/Flex';
import Input from '@/src/ui-kit/Input';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [form, setForm] = useState<LoginRequestInterface>({
    email: '+79871111111@gmail.com',
    password: '5YwLYPD85zPa0GX8Ws89',
  });

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    key: 'email' | 'password'
  ) => {
    setForm((prev) => {
      return {
        ...prev,
        [key as string]: event.target.value,
      };
    });
  };

  const loginHandler = () => {
    login(form)
      .unwrap()
      .then((responce) => {
        dispatch(setCredentials(responce));
        router.replace('/');
      });
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        width="30vw"
        height="max-content"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        <Input
          value={form.email}
          onChange={(event) => onChangeHandler(event, 'email')}
          placeholder="Email"
        />
        <Input
          value={form.password}
          onChange={(event) => onChangeHandler(event, 'password')}
          placeholder="Password"
        />
        <Button
          pattern="primary"
          size="large"
          width="100%"
          onClick={loginHandler}
        >
          Войти
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
