import styled from "styled-components";
import Footer from "../ui/common/Footer";
import Header from "../ui/Header/Header";
import { Outlet } from "react-router-dom";
import { useOrder } from "@/contextApi/orderDetails";
import OrderCanvas from "@/ui/orders/OrderCanvas";

const Section = styled.section`
  padding: 1.4rem 3rem 0 3rem;
  display: block;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1.4rem 1rem 0 1rem;
  }

  @media screen and (max-width: 1100px) {
    padding: 1.4rem 0 1rem 0;
  }
`;

function AppLayout() {
  const { offCanvas } = useOrder();
  return (
    <div className="app">
      <Section>
        {offCanvas ? <OrderCanvas /> : ""}
        <Header />
        <Outlet />
        <Footer />
      </Section>
    </div>
  );
}

export default AppLayout;
