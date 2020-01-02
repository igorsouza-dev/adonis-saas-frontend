import React from 'react';
import Button from 'styles/components/Button';
import { Container, SignForm } from '../styles';

const SignIn = () => {
  function handleSubmit() {}
  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Welcome!</h1>

        <span>E-MAIL</span>
        <input type="text" name="email" />

        <span>PASSWORD</span>
        <input type="password" name="password" />
        <Button size="big" type="submit">
          Signin
        </Button>
      </SignForm>
    </Container>
  );
};

export default SignIn;
