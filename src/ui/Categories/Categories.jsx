/* eslint-disable no-unused-vars */
import CategoryItem from "./CategoryItem"
// import CategoriesData from '../../utils/db.categories';
import styled from "styled-components";
import { getProducts } from "../../Api/getProductsDetails";
import { useQuery } from "@tanstack/react-query";
import ProductError from "../common/ProductError";
import Loader from "../common/Loader";

const Div=styled.div`

display: grid;
grid-template-columns:repeat(4,1fr);
padding-top:2.4rem;
@media screen and (max-width:1080px){

    grid-template-columns:repeat(3,1fr);

}

@media screen and (max-width:768px){

    grid-template-columns:repeat(2,1fr);
}

@media screen and (max-width:500px){

    grid-template-columns:repeat(1,1fr);

}

`;

function Categories() {

    const { data, isLoading, isError,error } = useQuery({queryKey:['Products'],queryFn:getProducts});

    console.log(isError);
    if (isLoading) return <Loader/>;
    if (isError) return  <ProductError error={error}/>;

    return (
        <Div>
            {
                data.map((item,i)=><CategoryItem key={i} item={item}/>)
            }
        </Div>
    )
}

export default Categories
