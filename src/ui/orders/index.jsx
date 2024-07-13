import { useOrder } from "@/contextApi/orderDetails";
import OrderList from "./OrderList";
import styled from "styled-components";
import Button from "@/ui/common/Button";
import { useState } from "react";
import UserDetail from "./UserDetail";

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: var(--color-slate-200);
  padding: 0.4rem;
  font-weight: 600;
  font-size: 1.3rem;
`;

const DIV = styled.div`
  margin: 1.4rem;

  display: flex;
  justify-content: right;

  button {
    color: #fff;
  }
`;

function Order() {
  const { order, handleDeleteOrder } = useOrder();
  const [isCart, setIsCart] = useState(true);

  return (
    <>
      {order.length > 0 ? (
        <>
          {isCart ? (
            <>
              <ul>
                <Header>
                  <span></span>
                  <span>Name</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span></span>
                </Header>
                {order.map((item) => (
                  <OrderList
                    item={item}
                    key={item.id}
                    handleDeleteOrder={handleDeleteOrder}
                  />
                ))}
                <span style={{ margin: "3.4rem 0" }}>
                  Total Items: <b>{order.length}</b>
                </span>
              </ul>
            </>
          ) : (
            <UserDetail />
          )}
          <DIV>
            <Button size="medium" onClick={() => setIsCart(!isCart)}>
              {isCart ? "Order Now" : "Go to Cart"}
            </Button>
          </DIV>
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>There no any Item in cart</h1>
      )}
    </>
  );
}

export default Order;
