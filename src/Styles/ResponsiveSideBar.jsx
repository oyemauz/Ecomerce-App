import ListItems from "../ui/MainSection/ListItems";
import styled from "styled-components";
import MainQuotes from "../ui/MainSection/MainQuotes";
import MainNavbar from "../ui/Header/MainNavbar";
import usePdata from "../ThemeContext/usePData";
import TopNavbar from "../ui/Header/TopNavbar";
import Logo from "../ui/Header/Logo";
import { useMediaQuery } from 'react-responsive';
// import {useState} from 'react';

const Main=styled.main`

display:grid;
grid-template-columns:30rem 1fr;
gap:2rem;
margin-bottom:2.8rem;

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

        const{menu,toggleSidebar} =usePdata();
        const isMobile = useMediaQuery({ maxWidth: 800 });
        const s = isMobile ? ()=> toggleSidebar() : null;

    return(
        <>
             { s ?
             <>
            <div className={`${menu ?"responsiveSidebar": "hideResponsiceSidebar"}`}>
                <Logo/>
                <MainNavbar/>
                <ListItems/>
                <TopNavbar/>
            </div>
            <MainQuotes/>
            </>
                 :
                <Main>
                    <ListItems/>
                    <MainQuotes/>
                </Main>
            }    
        </>
    );
}

