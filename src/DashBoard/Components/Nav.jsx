import { NavLink } from "react-router-dom";
import styled from "styled-components"


const NAV=styled.div`
    display: flex;
    justify-content: right;
    gap: 3.4rem;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem 3.4rem;
`;

function Nav() {
  return (
    <NAV className="profile">
      <span className="profile_image"><ion-icon name="person-circle-outline"></ion-icon></span>
      <span>Name</span>
      <NavLink to="/dashboard/profile"><ion-icon name="person-outline"></ion-icon></NavLink>
      <ion-icon name="log-out-outline"></ion-icon>
    </NAV>
  )
}

export default Nav