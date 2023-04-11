import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  FormWrapper,
  LoginButton,
  LoginInfoWrapper,
  LoginInput,
  LoginText,
  Logo,
  RegisterButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));

    clearForm();
  };

  return (
    <>
      <Section>
        <LoginInfoWrapper>
          <Logo>Phonebook</Logo>
          <LoginText>Please, Log In to use phonebook</LoginText>
        </LoginInfoWrapper>

        <FormWrapper>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <LoginInput
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />

            <LoginButton type="submit">Log in</LoginButton>

            <NavLink to="/register">
              <RegisterButton type="button">
                Don't have an account yet? Sign Up
              </RegisterButton>
            </NavLink>
          </Form>
        </FormWrapper>
      </Section>
    </>
  );
};
