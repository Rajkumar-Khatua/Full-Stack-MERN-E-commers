import { styled } from "styled-components";
import CategoryItems from "./categoryItems";
import { categories } from "../../../Data";
import { mobile } from '../../responsiveDesign';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  pading: 20px;
  ${mobile({padding:"0px", flexDirection:"column"})}

`;
const Categories = () => {
  return (
    <Container>
    {categories.map((item) => (
      <CategoryItems item={item}  key={item.id}/>
    ))}
  </Container>
  );
};

export default Categories;
