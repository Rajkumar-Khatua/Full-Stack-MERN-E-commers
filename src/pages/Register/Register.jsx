import React from "react";
import { styled } from "styled-components";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Checkbox } from "@mui/material";
import "./RG.scss";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  border: 1px solid lightgray;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: grey;
  font-weight: 600;
`;

const From = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
`;

const Policy = styled.span`
  margin: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover{
    background-color:#072c2cb9;
  }
`;
const Register = () => {
  return (
    <Container>
      <TitleMain> We are very happy to Connect With Us</TitleMain>
      <Wrapper>
        <Title>CREATE A ACCOUNT</Title>
        <From>
          <Input placeholder='First name' />
          <Input placeholder='Last name' />
          <Input placeholder='E-mail' />
          <Input placeholder='Mobile Number' />
          <Input placeholder='Password' />
          {/* <VisibilityOutlinedIcon/> */}
          <Input placeholder='Confrim Password' />
          <Policy>
            <Checkbox />
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Policy>
          <Button>REGISTER</Button>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Register;
