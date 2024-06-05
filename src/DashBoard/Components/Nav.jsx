import { logOutUser } from "@/api/userAuthentication";
import { useUser } from "@/contextApi/userContext";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NAV = styled.div`
  display: flex;
  justify-content: right;
  gap: 3.4rem;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 3.4rem;
`;

function Nav() {
  const navigate = useNavigate();
  const { user } = useUser();

  async function logout() {
    // eslint-disable-next-line no-unused-vars
    const logOut = await logOutUser();
    // console.log(logOut);
    // if (logOut) {
    navigate("/login");
    // }
  }
  console.log(user);

  return (
    <NAV className="profile">
      <span className="profile_image">{/* <img src=} /> */}</span>
      <span>name</span>
      <NavLink to="/dashboard/profile">
        <ion-icon name="person-outline"></ion-icon>
      </NavLink>
      <div onClick={logout} style={{ cursor: "pointer" }}>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </NAV>
  );
}

export default Nav;
