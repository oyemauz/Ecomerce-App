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

&.category{
    color:white;
    background-color:var(--color-lime-500);
}

&:last-child{
list-style:none;
justify-content:center;
font-weight:600;
}

`

// const SubCategories = styled.ul.attrs(({ isVisible }) => ({
//     style: {
//       display: isVisible ? 'block' : 'none',
//     },
//   }))`

//   background-color: #f9f9f9;
//   border-radius: 2px;
//   margin-top: 10px;
  
// `;

// const SubCategoryLI=styled.li`

// margin-top: 10px; /* Adjust as needed */
// `;



function ListItems() {

    const [showSubCategories, setShowSubCategories] = useState(true);

    const handleToggleSubCategories = () => {
      setShowSubCategories(!showSubCategories);
    };
  
    // function displayCategories(){
    //     if(window.innerWidth < 650){
    //         return{
                
    //         }
    //     }
    // }

    return (
        <>
            <UL>
                <LI className="category" onClick={handleToggleSubCategories}><ion-icon  name={Data.Categories.categories.logo}></ion-icon> <span> {Data.Categories.categories.category}</span></LI>
                {/* <SubCategories isVisible={showSubCategories}> */}
                    <LI><ion-icon  name={Data.Categories.clean_household.logo}></ion-icon> <span> {Data.Categories.clean_household.clean_household}</span></LI>
                    <LI><ion-icon  name={Data.Categories.egg_meat_fish.logo}></ion-icon> <span> {Data.Categories.egg_meat_fish.egg_meat_fish}</span></LI>
                    <LI><ion-icon  name={Data.Categories.fruits_vegetable.logo}></ion-icon> <span> {Data.Categories.fruits_vegetable.fruits_vegetable}</span></LI>
                    <LI><ion-icon  name={Data.Categories.online_food_delivery.logo}></ion-icon> <span> {Data.Categories.online_food_delivery.online_food_delivery}</span></LI>
                    <LI><ion-icon  name={Data.Categories.medistore.logo}></ion-icon> <span> {Data.Categories.medistore.medistore}</span></LI>
                    <LI><ion-icon  name={Data.Categories.online_category_services.logo}></ion-icon> <span> {Data.Categories.online_category_services.online_category_services}</span></LI>
                    <LI><ion-icon  name={Data.Categories.more_categories.logo}></ion-icon> <span> {Data.Categories.more_categories.more_categories}</span></LI>
                {/* </SubCategories> */}
            </UL>
        </>
    )
}

export default ListItems

