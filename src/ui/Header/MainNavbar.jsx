import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contextApi/authenticateUser";
import { NAV_COLLECTIONS_LINK as NAV_COLLECTIONS } from "@/constants";

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

const nav = [
  {
    name: "Home",
    icon: "home",
    link: NAV_COLLECTIONS.HOME,
  },
  {
    name: "Grocery",
    icon: "fast-food",
    link: NAV_COLLECTIONS.GROCERY,
  },
  {
    name: "Clean & HouseHold",
    icon: "nuclear",
    link: NAV_COLLECTIONS.CLEAN_HOUSEHOLD,
  },
  {
    name: "Blogs",
    icon: "megaphone",
    link: NAV_COLLECTIONS.BLOGS,
  },
  {
    name: "Contact",
    icon: "call",
    link: NAV_COLLECTIONS.CONTACT,
  },
  {
    name: "About",
    icon: "information-circle",
    link: NAV_COLLECTIONS.ABOUT,
  },
  {
    name: "Help",
    icon: "help-circle",
    link: NAV_COLLECTIONS.HELP,
  },
];

function MainNavbar() {
  const auth = useAuth();

  return (
    <UL>
      {nav.map((item, i) => (
        <LI key={i}>
          <ion-icon name={item.icon}></ion-icon>
          <Link to={item.link}>{item.name}</Link>
        </LI>
      ))}
      <LI>
        {auth.currentUser ? (
          <Link to={NAV_COLLECTIONS.DASHBOARD}>
            <Button
              color="white"
              size={window.innerWidth > 768 ? "large" : "medium"}
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link to={NAV_COLLECTIONS.LOGIN}>
            <Button
              color="white"
              size={window.innerWidth > 768 ? "large" : "medium"}
            >
              Register Vendor
            </Button>
          </Link>
        )}
      </LI>
    </UL>
  );
}

export default MainNavbar;
