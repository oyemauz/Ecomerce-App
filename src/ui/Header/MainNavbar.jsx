import styled from "styled-components";
import Data from "../../utils/db.appdata";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contextApi/authenticateUser";

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem;
  background-color: var(--color-neutral-800);
  color: #fff;
  border-radius: 2px;
`;

const LI = styled.li`
  letter-spacing: 1.1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:last-child {
    margin-left: 4rem;
  }
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    // button {
    //     size: medium;
    //   }

    display: flex;
    gap: 1rem;
    letter-spacing: 1.1px;
    padding: 1.6rem 0;
  }
`;

function MainNavbar() {
  const auth = useAuth();

  return (
    <UL>
      <LI>
        <ion-icon name="home"></ion-icon>{" "}
        <Link to={"/"}>{Data.MainNavbar.home}</Link>{" "}
      </LI>
      <LI>
        <ion-icon name="fast-food"></ion-icon>
        <Link to="/app/groceries">{Data.MainNavbar.grocery}</Link>
      </LI>
      <LI>
        <ion-icon name="nuclear"></ion-icon>
        <Link to="/app/clean-house">{Data.MainNavbar.clean_household}</Link>
      </LI>
      <LI>
        <ion-icon name="megaphone"></ion-icon>
        <Link to="/app/blogs">{Data.MainNavbar.blogs}</Link>
      </LI>
      <LI>
        <ion-icon name="call"></ion-icon>
        <Link to="/app/contact">{Data.MainNavbar.contact}</Link>
      </LI>
      <LI>
        <ion-icon name="information-circle"></ion-icon>
        <Link to="/app/about">{Data.MainNavbar.about}</Link>
      </LI>
      <LI>
        <ion-icon name="help-circle"></ion-icon>
        <Link to="/app/help">{Data.MainNavbar.help}</Link>
      </LI>
      <LI>
        {auth.currentUser ? (
          <Link to="/dashboard">
            <Button
              color="white"
              size={window.innerWidth > 768 ? "large" : "medium"}
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              color="white"
              size={window.innerWidth > 768 ? "large" : "medium"}
            >
              {Data.MainNavbar.register}
            </Button>
          </Link>
        )}
      </LI>
    </UL>
  );
}

export default MainNavbar;
