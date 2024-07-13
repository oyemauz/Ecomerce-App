import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [offCanvas, setOffCanvas] = useState(false);

  function handleDeleteOrder(id) {
    setOrder(order.filter((ord) => ord.id !== id));
    toast.error("Item Remove from Cart");
  }

  return (
    <OrderContext.Provider
      value={{ order, setOrder, offCanvas, setOffCanvas, handleDeleteOrder }}
    >
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
