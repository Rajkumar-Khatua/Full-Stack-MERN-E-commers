import { styled } from "styled-components";
import { mobile } from "../../responsiveDesign";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px;
  position: relative;
  ${mobile({ padding: "20px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 500px;
  width: 500px;
  cursor: pointer;
  border-radius: 50%;

  ${mobile({ borderRadius: 0, height: "30vh", borderRadius: "10px" })}

  &:hover {
    border: 5px solid #20b375d5;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 28px;

  ${mobile({fontSize:"18px", marginBottom:"5px"})}

`;
const Button = styled.button`
  padding: 1em 4em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  font-size: 20px;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;

    @keyframes glowing-button-85 {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }

     
    }
  }
  ${mobile({ backgroundColor:"transparent", padding:"0.5em 2em" })}
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Buy Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
