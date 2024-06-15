import { logOutUser } from "@/api/vendorAuthentication";
import { useAuth } from "@/contextApi/authenticateUser";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NAV = styled.div`
  display: flex;
  justify-content: right;
  gap: 3.4rem;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 3.4rem;

  .profile_image {
    width: 25px;
    height: 25px;
  }
  .profile_image img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

function Nav() {
  const navigate = useNavigate();
  const { currentUser: user, setCurrentUser } = useAuth();

  async function logout() {
    try {
      // eslint-disable-next-line no-unused-vars
      const logOut = await logOutUser();
      setCurrentUser(null);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  }
  // console.log(user);

  return (
    <NAV className="profile">
      <span className="profile_image">
        <img src={user.imageUrl} alt={"Profile"} />
      </span>
      <span>{user.name}</span>
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
