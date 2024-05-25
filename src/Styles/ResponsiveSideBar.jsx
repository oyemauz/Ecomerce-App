import ListItems from "../ui/MainSection/ListItems";
import styled from "styled-components";
import MainQuotes from "../ui/MainSection/MainQuotes";
import MainNavbar from "../ui/Header/MainNavbar";
import usePdata from "../ThemeContext/usePData";
import Logo from "../ui/Header/Logo";
import { useMediaQuery } from 'react-responsive';
import { useLocation } from "react-router-dom";

const Main=styled.main`

display:grid;
grid-template-columns:30rem 1fr;
gap:2rem;
position:relative;

@media screen and (max-width:650px){

    grid-template-columns: 5rem 1fr;
}

@media screen and (max-width:800px){

   grid-template-columns:1fr;
}
`;

// const Side=styled.div `
// @media screen and (max-width:800px){

// background-color:tomato;
// position:absolute;
// top:0;
// left:0;
// }
// `;

export default function ResponsiveSideBar(){

    let location = useLocation();

    const isGrocery=location.pathname ==="/groceries";
    // console.log(isGrocery);
    
    const{menu,toggleSidebar} =usePdata();
    const isMobile = useMediaQuery({ maxWidth: 800 });
    const s = isMobile ? ()=> toggleSidebar() : null;

        // console.log("hello");

    return(
        <>
             { s ?
             <>
            <div className={`${menu ?"responsiveSidebar": "hideResponsiceSidebar"}`}>
                <Logo/>
                <MainNavbar/>
                <ListItems/>
            </div>
            {!isGrocery?<MainQuotes/>:null}
            </>
                 :
                <Main>
                    {isGrocery?null:
                    <>
                    <ListItems/>
                    <MainQuotes/>
                    </>
                    }    
                </Main>
            }    
        </>
    );
}

