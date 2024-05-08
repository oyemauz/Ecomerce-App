/* eslint-disable no-unused-vars */
import CategoryItem from "./CategoryItem"
import CategoriesData from '../../utils/db.categories';
import styled from "styled-components";


const Div=styled.div`

display: grid;
grid-template-columns:repeat(4,1fr);

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
    const { Fruits, Vegetables, detergents } = CategoriesData;

    return (
        <Div>
            {Object.entries(Fruits).map(([key, item]) => (
                <CategoryItem key={key} item={item} />
            ))}
            {Object.entries(Vegetables).map(([key, item]) => (
                <CategoryItem key={key} item={item} />
            ))}
            {Object.entries(detergents).map(([brand, brandData]) => (
                
                Object.entries(brandData.sub_categories).map(([subkey, item]) => (
                    <CategoryItem key={subkey} item={item} />
                ))
                
            ))}
        </Div>
    )
}

export default Categories
