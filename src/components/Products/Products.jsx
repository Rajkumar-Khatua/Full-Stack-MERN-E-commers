import React from "react";
import styled from "styled-components";

import { popularProducts } from "../../../Data";
import SingleProduct from './SingleProduct';


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct
          item={item}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default Products;
