import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  text-transform: uppercase;
  font-size: 14px;
  background-color: antiquewhite;
`;

export const List = styled.ul`
  list-style: none;
  max-width: 400px;
  padding: 40px 50px;
  margin: 50px auto 0;
  background-color: gainsboro;
`;

export const Name = styled.p`
  display: block;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 20px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.2);
`;
