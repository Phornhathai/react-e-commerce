import { popularProducts } from '../../data'
import Product from './ProductItem'
import styled from "styled-components"

const ProductsContainer = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`

const Products = () => {
  return (
   <ProductsContainer>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ProductsContainer>
  )
}

export default Products
