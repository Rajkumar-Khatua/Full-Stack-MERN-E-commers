import React from "react";
import { styled } from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import {
  AddBoxRounded,
  AddCircle,
  RemoveCircle,
  RemoveRounded,
} from "@mui/icons-material";

const Container = styled.div`
  /* height: 100vh;
width: 100vw; */
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-weigt: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBtn = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "fileld" && "none"};
  background-color: ${(props) =>
    props.type === "fileld" ? "black" : "transparent"};
  color: ${(props) => props.type === "fileld" && "white"};
`;
const TopTexts = styled.div``;

const TopText = styled.span`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: #fa255b;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summery = styled.div`
  flex: 1;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom:
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductAmount = styled.span`
  font-size: 20px;
  margin: 5px;
`;

const ProductSize = styled.span``;
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 300;
`;
const Hr = styled.hr`
background-color: #7472728b;
border: none;
height: 1px;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopBtn>CONTINUE SHOPING</TopBtn>
          <TopTexts>
            <TopText>Shoping Bag (8)</TopText>
            <TopText>Your Wishlist (1)</TopText>
          </TopTexts>
          <TopBtn type='fileld'>CHECKOUT NOW</TopBtn>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src='https://m.media-amazon.com/images/I/71sgfcNyR2L._UL1500_.jpg' />
                <Details>
                  <ProductName>DHRUVI TRENDZ Women's Dresses</ProductName>
                  <ProductId>
                    <b>ID: </b> 565d54sdfbdasgrhf54
                  </ProductId>
                  <ProductColor color='#8b8585' />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircle />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircle />
                </ProductAmountContainer>
                <ProductPrice>$ 45</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src='https://m.media-amazon.com/images/I/81s3Bg2AaVL._UL1500_.jpg' />
                <Details>
                  <ProductName>Lymio Dresses for Women</ProductName>
                  <ProductId>
                    <b>ID: </b> 565d54sdarbdasgr55asdsa
                  </ProductId>
                  <ProductColor color='#bb2424' />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircle />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircle />
                </ProductAmountContainer>
                <ProductPrice>$ 44</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summery>
            {/* <SummTitle>ORDER SUMMERY</SummTitle> */}

          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
