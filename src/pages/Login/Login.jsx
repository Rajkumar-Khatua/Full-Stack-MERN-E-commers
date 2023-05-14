import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20%;
  flex-direction: column;
  border: 1px solid lightgray;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: grey;
  font-weight: 600;
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleMain = styled.h1`
  font-size: 20px;
  padding: 20px;
  color: grey;
`;

const Input = styled.input`
    padding: 10px;
    margin:10px;
    border-radius: 6px;
    border: 0.5px solid lightgrey;VisibilityOutlinedIcon
    outline: none;
    border-width: 0.5px;
    outline: none;
    width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #ac7500d1;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #4b3506f9;
  }
`;
const Link = styled.span`
  text-align: center;
  /* padding: 0.5em; */
  cursor: pointer;
  margin:5px 0px;

  &:hover {
    color: #ad561ce6;
    border-bottom: 1px solid grey;
  }
`;
const Login = () => {
  return (
    <Container>
      <TitleMain> We are very happy to See you again</TitleMain>
      <Wrapper>
        <Title>LOGIN ACCOUNT</Title>
        <From>
          <Input placeholder='E-mail' />

          <Input placeholder='Password' />
          {/* <VisibilityOutlinedIcon/> */}

          <Button>LOGIN</Button>

          <Link>Forget Password</Link>
          <Link>
            New to RajStore ? <b>Register</b>
          </Link>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Login;
