import styled from '@emotion/styled';

export const LoginInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.h2`
  font-size: 54px;
  font-weight: 800;
  color: #e0a96d;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const LoginText = styled.span`
  font-size: 24px;
  color: #f6ead4;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  border-radius: 10px;
  gap: 24px;
  width: 400px;
`;

export const LoginInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid #f6ead4;
  outline: none;
  color: #e0a96d;
  font-weight: bold;
  font-size: 18px;
  padding-left: 20px;
  margin: 0 auto;
  background-color: transparent;
  width: 320px;

  ::placeholder {
    color: #f6ead4;
  }
  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #e0a96d;
  color: #f6ead4;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 30px;
  transition: all 250ms ease;
  margin-bottom: 15px;
  &:hover {
    opacity: 0.85;
    scale: 1.1;
  }
`;

export const RegisterButton = styled.button`
  width: 410px;
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #e0a96d;
  color: #e0a96d;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 40px;
  transition: all 250ms linear;
  &:hover {
    opacity: 0.85;
    color: #f6ead4;
    background-color: #e0a96d;
    scale: 1.1;
  }
`;
