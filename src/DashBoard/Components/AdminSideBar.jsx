import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DASHBOARD_COLLECTIONS_LINK } from "@/constants";

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.4rem 0 1.4rem;
  font-size: 1.2rem;
  margin: 0;
`;

const Img = styled.img`
  width: 50%;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
`;

const LI = styled.li`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  color: var(--color-grey-700);
  font-weight: 500;
  border-radius: 7px;
  letter-spacing: 1.3px;

  &:hover {
    background-color: var(--color-slate-100);
  }
`;

const data = [
  {
    name: "Home",
    link: DASHBOARD_COLLECTIONS_LINK.DASHBOARD,
    icon: "home-outline",
  },
  {
    name: "Products",
    link: DASHBOARD_COLLECTIONS_LINK.PRODUCTS,
    icon: "storefront-outline",
  },
  {
    name: "Orders",
    link: DASHBOARD_COLLECTIONS_LINK.ORDERS,
    icon: "briefcase-outline",
  },
  {
    name: "Users",
    link: DASHBOARD_COLLECTIONS_LINK.USERS,
    icon: "person-add-outline",
  },
  {
    name: "Settings",
    link: DASHBOARD_COLLECTIONS_LINK.SETTINGS,
    icon: "settings-outline",
  },
];

export default function AdminSideBar() {
  return (
    <SideBar>
      <NavLink to="/">
        <Img src="/app_logo_img-removebg.png" alt="logo" />
      </NavLink>
      <UL>
        {data.map((item, i) => (
          <LI key={i}>
            <ion-icon name={item.icon}></ion-icon>
            <NavLink to={item.link}>{item.name}</NavLink>
          </LI>
        ))}
      </UL>
    </SideBar>
  );
}
