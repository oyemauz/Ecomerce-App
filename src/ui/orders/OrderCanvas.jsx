// OrderCanvas.js

import { useOrder } from "@/contextApi/orderDetails";
import styled from "styled-components";
import Order from "./index";

const DIV = styled.div`
  //position: relative;
`;

const Canvas = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  transition: all ease-in-out 3s;

  header {
    margin: 1rem;
    display: flex;
    gap: 30%;
    align-items: center;
  }
  ion-icon {
    font-size: 2.4rem;
    cursor: pointer;
  }
`;

export default function OrderCanvas() {
  const { offCanvas, setOffCanvas, order } = useOrder();
  console.log(order);
  return (
    <DIV>
      <Canvas>
        <header>
          <ion-icon
            onClick={() => setOffCanvas(!offCanvas)}
            name="close-outline"
          ></ion-icon>
          <img src="public\app_logo_img-removebg.png" alt="Grocery GO" />
        </header>
        <Order />
      </Canvas>
    </DIV>
  );
}
