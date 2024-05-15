import styled from "styled-components";
import Data from '../../utils/db.appdata';
import Button from "../common/Button";
import { Link } from "react-router-dom";

const UL=styled.ul`
display:flex;
align-items:center;
justify-content:space-around;
padding:.8rem;
background-color:var(--color-neutral-800);
color:#fff;
border-radius:2px;

`

const LI=styled.li`
letter-spacing:1.1px;
cursor:pointer;
display:flex;
align-items:center;
gap:1rem;

&:last-child{
    margin-left:4rem;
}
&:hover{
    text-decoration:underline;
}

@media screen and (max-width:800px){
    // button {
    //     size: medium; 
    //   }

    display:flex;
    gap:1rem;
    letter-spacing: 1.1px;
    padding: 1.6rem 0;
}
`

function MainNavbar() {
    return (
            <UL>
                <LI><ion-icon name="home"></ion-icon> <Link to={"/"}>{Data.MainNavbar.home}</Link> </LI>
                <LI><ion-icon name="fast-food"></ion-icon><Link to="/groceries">{Data.MainNavbar.grocery}</Link></LI>
                <LI><ion-icon name="nuclear"></ion-icon><Link to="/clean-house">{Data.MainNavbar.clean_household}</Link></LI>
                <LI><ion-icon name="megaphone"></ion-icon><Link to="/blogs">{Data.MainNavbar.blogs}</Link></LI>
                <LI><ion-icon name="call"></ion-icon><Link to="/contact">{Data.MainNavbar.contact}</Link></LI>
                <LI><ion-icon name="information-circle"></ion-icon><Link to="/about">{Data.MainNavbar.about}</Link></LI>
                <LI><ion-icon name="help-circle"></ion-icon><Link to="/help">{Data.MainNavbar.help}</Link></LI>
                <LI><Button color="white" size={window.innerWidth > 768 ? 'large' : 'medium'}>{Data.MainNavbar.register}</Button></LI>
            </UL>
    )
}

export default MainNavbar
