import { Outlet } from "react-router-dom";
import AdminSideBar from "./Components/AdminSideBar";
import Nav from "./Components/Nav";
import styled from "styled-components";

const Div=styled.div`

display:grid;
grid-template-columns:20rem 1fr;
height:100vh;
`;

const Section=styled.section`
border-left:1px solid var(--color-slate-200);

`;

const OUTLET=styled.div`
background-color:var(--color-slate-100);
`;

export default function DashBoard() {
  return (
    <Div className="dashboard">
        <AdminSideBar/>
            <Section>
                <Nav/>
                <OUTLET>
                    <Outlet/>
                </OUTLET>
            </Section>
    </Div>
  )
}
