import { SendRounded } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { mobile } from '../responsiveDesign';

const Container = styled.div`
  height: 50vh;
  background: #d9a7c7;
  background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);
  background: linear-gradient(to right, #fffcdc, #d9a7c7);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;

  ${mobile({ textAlign:"center", fontSize:"30px"})}

`;
const Description = styled.div`
  font-size: 22px;
  font-weight: 500;
  font-family: "Dancing Script", cursive;

  ${mobile({ textAlign:"center"})}

`;
const InputContainer = styled.div`
  /* background-color: #2e0e0e; */
  padding: 10px 20px;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: 0.5px solid #fffcdc;
  border-radius: 10px;

  ${mobile({ justifyContent: 'center', width:"80%", border:"none"})}

`;
const Input = styled.input`
  border: none;
  flex: 8;
  outline: none;
  padding-left: 20px;
  font-weight: bolder;
  border-radius: 10px 0px 0px 10px;

  ${mobile({ flex:5})}

`;
const Button = styled.button`
  flex: 1;
  background-color: #929019;
  color: #fff;
  border: none;
  border-radius: 0px 10px 10px 0px;
  ${mobile({ backgroundColor:"teal"})}


  cursor: pointer;
`;

const NewsLatter = () => {
  return (
    <Container>
      <Title>Get Notified at First</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium
        animi non.
      </Description>
      <InputContainer>
        <Input
          placeholder='E-mail'
          type='email'
          required='true'
        />
        <Button>
          <SendRounded />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLatter;
