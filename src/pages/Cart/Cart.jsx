import React from "react";
import { styled } from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { LocalShippingOutlinedIcon } from "@mui/icons-material/LocalShippingOutlined";
import { mobile } from "../../responsiveDesign";
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
  ${mobile({ padding: "10px" })}
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

  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
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
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "150px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ padding: "10px", margin: "5px" })}
`;
const ProductName = styled.span`
  /* font-weight: blod; */
`;
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
  /* ${mobile({ fontSize: "14px", fontWeight: "bold" })} */
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
const Summery = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(255, 255, 255, 0.79);

  &:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  ${mobile({ height:"40vh", padding:"10px"})}

`;
const SummTitle = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "20px", fontWeight: "bold", textAlign: "center"})}

`;

const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummeryItemText = styled.span`
  font-weight: 500;
  ${mobile({ fontSize: "12px", fontWeight: "bold" })}

`;

const SummeryItemPrice = styled.span`
  font-weight: 400;
`;

const Button = styled.button`
  width: 100%;
  background: #f7971e;
  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
  background: linear-gradient(to right, #ffd200, #f7971e);
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 30px;
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
                  <RemoveCircle htmlColor='red' />
                  <ProductAmount>2</ProductAmount>
                  <AddCircle htmlColor='green' />
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
                  <RemoveCircle htmlColor='red' />
                  <ProductAmount>2</ProductAmount>
                  <AddCircle htmlColor='green' />
                </ProductAmountContainer>
                <ProductPrice>$ 44</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summery>
            <SummTitle>ORDER SUMMERY</SummTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal </SummeryItemText>
              <SummeryItemPrice>$ 45 </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>
                Estimated LocalShippingOutlinedIconing
              </SummeryItemText>
              <SummeryItemPrice>$ 5.90 </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount </SummeryItemText>
              <SummeryItemPrice>$ -5.90 </SummeryItemPrice>
            </SummeryItem>
            <Hr />
            <SummeryItem type='total'>
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>$ 45 </SummeryItemPrice>
            </SummeryItem>
            <Button>Proceed to Buy</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
