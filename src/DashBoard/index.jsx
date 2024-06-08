import { Outlet } from "react-router-dom";
import AdminSideBar from "./components/AdminSideBar";
import Nav from "./components/Nav";
import styled from "styled-components";

// import { firebaseHelpers } from "@/helpers"

const Div = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  margin: 0;
  padding: 0;
`;

const Section = styled.section`
  border-left: 1px solid var(--color-slate-200);
`;

const OUTLET = styled.div`
  margin: 0;
  padding: 0;
  background-color: var(--color-slate-100);
  height: calc(100vh - 6.8rem);
  overflow-y: scroll;
`;

export default function DashBoard() {
  return (
    <Div className="dashboard">
      <AdminSideBar />
      <Section>
        <Nav />
        <OUTLET>
          <Outlet />
        </OUTLET>
      </Section>
    </Div>
  );
}
