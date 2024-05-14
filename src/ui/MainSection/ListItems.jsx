import styled from "styled-components"
import Data from '../../utils/db.appdata';
import { useState } from "react";



const UL=styled.ul`

background-color:white;
color:#000;
border-radius:2px;
font-size:1.3rem;
font-weight:500;


// &:first-child{
//     color:white;
//     background-color:var(--color-lime-500);
// }

// &:first-child{
//     color:white;
//     background-color:var(--color-lime-500);
// }
`

const LI=styled.li`
letter-spacing:1.1px;
padding:1.6rem 1rem;
display:flex;
align-items:center;
gap:1rem;
cursor:pointer;
&:hover{
    text-decoration:underline;
}

@media screen and (max-width:800px){
    &.category{
        color:white;
        background-color:var(--color-lime-500);
    }
}

&:last-child{
list-style:none;
justify-content:center;
font-weight:600;
}
`

function ListItems() {

    const [showSubCategories, setShowSubCategories] = useState(true);

    const handleToggleSubCategories = () => {
      setShowSubCategories(!showSubCategories);
    };
  
    return (
        <>
            <UL>
                <LI className="category" onClick={handleToggleSubCategories}><ion-icon  name={Data.Categories.categories.logo}></ion-icon> <span> {Data.Categories.categories.category}</span> <span className="category_icon"><ion-icon name="chevron-down-outline"></ion-icon></span> </LI>
                <div className={showSubCategories?"subItems":null}>
                    <LI><ion-icon  name={Data.Categories.clean_household.logo}></ion-icon> <span> {Data.Categories.clean_household.clean_household}</span></LI>
                    <LI><ion-icon  name={Data.Categories.egg_meat_fish.logo}></ion-icon> <span> {Data.Categories.egg_meat_fish.egg_meat_fish}</span></LI>
                    <LI><ion-icon  name={Data.Categories.fruits_vegetable.logo}></ion-icon> <span> {Data.Categories.fruits_vegetable.fruits_vegetable}</span></LI>
                    <LI><ion-icon  name={Data.Categories.online_food_delivery.logo}></ion-icon> <span> {Data.Categories.online_food_delivery.online_food_delivery}</span></LI>
                    <LI><ion-icon  name={Data.Categories.medistore.logo}></ion-icon> <span> {Data.Categories.medistore.medistore}</span></LI>
                    <LI><ion-icon  name={Data.Categories.online_category_services.logo}></ion-icon> <span> {Data.Categories.online_category_services.online_category_services}</span></LI>
                    <LI><ion-icon  name={Data.Categories.more_categories.logo}></ion-icon> <span> {Data.Categories.more_categories.more_categories}</span></LI>
                </div>
            </UL>
        </>
    )
}

export default ListItems

