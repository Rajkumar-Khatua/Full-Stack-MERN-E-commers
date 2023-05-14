import { styled } from "styled-components";
import CategoryItems from "./categoryItems";
import { categories } from "../../../Data";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
