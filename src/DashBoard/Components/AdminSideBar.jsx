import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar=styled.div`

display:flex;
flex-direction:column;
align-items:center;
padding:3.4rem 1.4rem;
font-size:1.2rem;

`;

const Img=styled.img`
width:50%;
`;

const UL=styled.ul`

display:flex;
align-items:center;
flex-direction:column;
gap:2.4rem;
width:100%;
`;

const LI=styled.li`

display:flex;
align-items:center;
gap:1.4rem;
cursor:pointer;
width:100%;
padding:1rem;
color:var(--color-grey-700);
font-weight:500;
border-radius:7px;
letter-spacing:1.3px;

&:hover{
  background-color:var(--color-slate-100);
}

`;

export default function AdminSideBar() {

  return (
    <SideBar>
        <Img src="/app_logo_img-removebg.png" alt="Muaz"/>
        <UL>
            <LI><ion-icon name="home-outline"></ion-icon><NavLink to='/dashboard'>Home</NavLink></LI>
            <LI><ion-icon name="storefront-outline"></ion-icon><NavLink to='/dashboard/products'>Products</NavLink></LI>
            <LI><ion-icon name="briefcase-outline"></ion-icon><NavLink to='/dashboard/orders'>Orders</NavLink></LI>
            <LI><ion-icon name="person-add-outline"></ion-icon><NavLink to='/dashboard/user'>Users</NavLink></LI>
            <LI><ion-icon name="settings-outline"></ion-icon><NavLink to='/dashboard/setting'>Settings</NavLink></LI>
        </UL>
    </SideBar>
  )
}
