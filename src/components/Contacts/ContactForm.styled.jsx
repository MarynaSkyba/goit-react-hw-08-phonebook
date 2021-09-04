import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 400px;
  padding: 40px 50px;
  margin: 50px auto 0;
  background-color: gainsboro;
`;

export const Label = styled.label`
  display: block;
  font-family: 'Roboto', sans-serif;
  color: black;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 0 0 15px;
  margin: 10px 0 15px;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  color: black;
  background: rgba(255, 255, 255, 0.2);
  font-family: 'Roboto', sans-serif;
`;

export const Button = styled.button`
  display: block;
  width: 103%;
  margin: 40px 0 15px;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  text-transform: uppercase;
  font-size: 14px;
  background-color: antiquewhite;
`;
