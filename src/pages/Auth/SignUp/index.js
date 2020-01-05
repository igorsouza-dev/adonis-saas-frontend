import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from 'styles/components/Button';
import { signUpRequest } from 'store/modules/auth/actions';
import { Container, SignForm } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('This is not a valid e-mail address.')
    .required('The e-mail is required.'),
  password: Yup.string().required('The password is required.'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Container>
      <SignForm onSubmit={handleSubmit} schema={schema}>
        <h1>Create Account!</h1>
        <span>NAME</span>
        <Input type="name" name="name" />

        <span>E-MAIL</span>
        <Input type="email" name="email" />

        <span>PASSWORD</span>
        <Input type="password" name="password" />
        <Button size="big" type="submit">
          {loading ? 'Loading...' : 'SignUp'}
        </Button>
      </SignForm>
    </Container>
  );
};

export default SignUp;
