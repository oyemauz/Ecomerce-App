import styled from "styled-components";
import Data from '../../utils/db.appdata';
// import DisplayFlex from "./DisplayFlex";

const Nav=styled.nav`

display:grid;
grid-template-columns:30rem 1fr 45rem;
padding:.4rem .6rem;
border-radius:2px;

@media screen and (max-width:${(props)=>props.theme.breakpoints.md}){

   grid-template-columns:1fr;
}

 @media screen and (max-width:800px){


    letter-spacing:1.1px;
    cursor:pointer;
    display:flex;
    align-items:left;
    gap:1rem;
    padding:.8rem;

    &::before{
        content:"Account Information";
        font-size:1.3rem;
        font-family:600;
    }

}
`;


const DIV=styled.div`
display:flex;
align-items:center;
justify-content:space-around;

@media screen and (max-width:${(props)=>props.theme.breakpoints.md}){

    &:first-child{
        display:none;
    }
 }
}

 @media screen and (max-width:800px){
    display:flex;
    align-items:left;
    // muaz
}
`;

export default function TopNavbar(){

    return(
        <Nav>
            <DIV>
                <span>{Data.common.contact}</span>
                <span>{Data.common.gmail}</span>
            </DIV>
            <DIV style={{gridColumn:"-2/-1"}}>
                <span>{Data.common.account}</span>
                <DIV>Currency: {Data.common.currency}<ion-icon name={Data.common.downArrow}></ion-icon></DIV>
                <DIV>Language: {Data.common.language}<ion-icon name={Data.common.downArrow}></ion-icon></DIV>
            </DIV>        
        </Nav>
    )
}
