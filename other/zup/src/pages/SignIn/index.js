import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }

  return (
    <>
      <header>
        <span>Login Form</span>
      </header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Username" />

        <Input name="password" type="password" placeholder="Password" />

        <div id="btn-container">
          <button type="submit">{loading ? 'Carregando...' : 'Sign In'}</button>
          <Link to="/register">Criar conta gratuita</Link>
        </div>
      </Form>
    </>
  );
}
