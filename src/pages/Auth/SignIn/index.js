import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from 'styles/components/Button';
import { signInRequest } from 'store/modules/auth/actions';
import { Container, SignForm } from '../styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('This is not a valid e-mail address.')
    .required('The e-mail is required.'),
  password: Yup.string().required('The password is required.'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <SignForm onSubmit={handleSubmit} schema={schema}>
        <h1>Welcome!</h1>

        <span>E-MAIL</span>
        <Input type="text" name="email" />

        <span>PASSWORD</span>
        <Input type="password" name="password" />
        <Button size="big" type="submit">
          {loading ? 'Loading...' : 'SignIn'}
        </Button>
      </SignForm>
    </Container>
  );
};

export default SignIn;
