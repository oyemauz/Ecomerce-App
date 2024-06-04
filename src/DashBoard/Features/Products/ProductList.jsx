import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
// import { Spinner } from "flowbite-react";
import ErrorPage from "../../../ui/common/ErrorPage";
import { getProducts } from "../../../api/getProductsDetails";
import ProductsList from "./Product.";
import { useState } from "react";
import AddProduct from "./AddProduct";
import PropTypes from "prop-types";
import { Bars } from "react-loader-spinner";

const Product = styled.div`
  padding: 2.4rem;
  border-radius: 4px;
  h3 {
    font-size: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const Header = styled.header`
  padding: 1.6rem 0;
  // background-color: var(--color-slate-100);
  border-bottom: 1px solid var(--color-slate-200);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Section = styled.section`
  margin: 0.4rem 0px;
  background-color: #fff;
`;

const DIV = styled.div`
  border: 1px solid var(--color-slate-200);
  margin: 1rem 2.4rem;
`;

const ProductBtn = styled.button`
  padding: 1.4rem;
  margin-top: 1.4rem;
  border: none;
  background-color: var(--color-lime-500);
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: rgb(118, 178, 28);
  }
`;

export default function Products() {
  const [isNewProduct, setnewProduct] = useState(false);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="loader">
        <Bars
          height="60"
          width="70"
          color="#84cc16"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (isError) return <ErrorPage error={error} />;

  return (
    <>
      {isNewProduct ? (
        <AddProduct setnewProduct={setnewProduct} isNewProduct={isNewProduct} />
      ) : (
        <ProductTable
          setnewProduct={setnewProduct}
          data={data}
          isNewProduct={isNewProduct}
        />
      )}
    </>
  );
}

ProductTable.propTypes = {
  setnewProduct: PropTypes.any,
  isNewProduct: PropTypes.any,
  data: PropTypes.any,
};

function ProductTable({ setnewProduct, isNewProduct, data }) {
  return (
    <>
      <Product>
        <h3>All Products</h3>
      </Product>
      <DIV>
        <Header className="product_row">
          <div></div>
          <div>name</div>
          <div>price</div>
          <div>status</div>
          <div>quantity</div>
        </Header>
        <Section>
          {data.map((item, i) => (
            <ProductsList key={i} item={item} />
          ))}
        </Section>
        <ProductBtn onClick={() => setnewProduct(!isNewProduct)}>
          Add new Products
        </ProductBtn>
      </DIV>
    </>
  );
}
