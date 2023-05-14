import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBasket,
} from "@mui/icons-material";
import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(119, 117, 117, 0.205);
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  color: #eb2c73;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #e6e6e6ae;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease;

  &:hover ${Info} {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;
const Circle = styled.div`
  /* background-color: #6360628f; */
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  border-radius: 50%;

  &:hover {
    background-color: #fff;
    border-radius: 50%;
    transform: scale(1.3);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info className='icon'>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
