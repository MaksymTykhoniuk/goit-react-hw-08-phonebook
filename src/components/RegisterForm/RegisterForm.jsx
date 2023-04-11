// system
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';

// styles
import {
  Form,
  FormWrapper,
  LoginButton,
  Logo,
  RegisterButton,
  RegisterInfoWrapper,
  RegisterInput,
  RegisterText,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'nickname') {
      setNickname(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const clearForm = () => {
    setNickname('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: nickname,
        email,
        password,
      })
    );

    clearForm();
  };

  return (
    <>
      <Section>
        <RegisterInfoWrapper>
          <Logo>Phonebook</Logo>
          <RegisterText>Create a new account to use phonebook</RegisterText>
        </RegisterInfoWrapper>

        <FormWrapper>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <RegisterInput
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={nickname}
              onChange={handleInputChange}
            />

            <RegisterInput
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />

            <RegisterInput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />

            <RegisterButton type="submit">Sing up</RegisterButton>

            <NavLink to="/login">
              <LoginButton type="button">
                Already have an account? Log in
              </LoginButton>
            </NavLink>
          </Form>
        </FormWrapper>
      </Section>
    </>
  );
};
