import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Badge, TextField } from "@mui/material";
import { useState } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { HeartBroken } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Parent = styled.div`
  height: 50px;
  /* border-bottom: 0.5px solid lightgray; */
  position: sticky;
  top: 0;
  padding-bottom: 2px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index:999;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
`;
const Left = styled.div`
  /* margin-top: 15px; */
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #1c8d73;
`;
const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Middle = styled.div`
  /* margin-top: 15px; */
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  width: 50%;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    border-color: rgb(26, 24, 27);
    transition: all 1s ease;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  border-right: 0.5px solid lightgray;
`;

const Right = styled.div`
  /* margin-top: 15px; */
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Login = styled.span`
  margin-left: 20px;
  padding: 10px 15px;

  border-radius: 10px;
  color: #ec0a7b;

  &:hover {
    color: #ffffff;
    background: #833ab4;
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  }
`;
const Register = styled.span`
  margin-left: 20px;
  padding: 10px 15px;
  background: #00f260;
  background: -webkit-linear-gradient(to right, #0575e6, #00f260);
  background: linear-gradient(to right, #0575e6, #00f260);

  border-radius: 10px;
  color: #ffff;
`;
const Navbar = () => {
  const options = ["English", "Hindi"];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Parent>
      <Wrapper>
        <Left>
          <Logo>Raj Store</Logo>

          <Language>
            {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
            <h5 className='value'>{`Choosen Language: '${inputValue} '`}</h5>

            {/* <Autocomplete
            className="options"
            
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id='controllable-states-demo'
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Languages'
                />
              )}
            /> */}
          </Language>
        </Left>
        <Middle>
          <SearchContainer>
            <Input />
            <SearchOutlinedIcon className='SearchIcon' />
          </SearchContainer>
        </Middle>
        <Right>
          <RightItems>
            <Badge
              color='primary'
              badgeContent={5}
              showZero>
              <ShoppingCartIcon color='secondary' />
            </Badge>
            <FavoriteBorderOutlinedIcon className='rightItems' />

            {/* <span className='Login'>Login</span> */}
            <Login> Login</Login>
            {/* <span className='register '>Register</span> */}
            <Register>Register</Register>
          </RightItems>
          {/* <Avatar
            sx={{
              height: 35,
              width: 35,
              textAlign: "center",
              backgroundColor: "green",
            }}>
            H
          </Avatar> */}
        </Right>
      </Wrapper>
    </Parent>
  );
};

export default Navbar;
