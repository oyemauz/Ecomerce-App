import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <OrderContext.Provider value={{ order, setOrder, offCanvas, setOffCanvas }}>
      {" "}
      {children}{" "}
    </OrderContext.Provider>
  );
};

function useOrder() {
  return useContext(OrderContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useOrder, OrderProvider };
