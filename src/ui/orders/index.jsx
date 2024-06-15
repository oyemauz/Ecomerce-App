import { useOrder } from "@/contextApi/orderDetails";
import OrderList from "./OrderList";

function Order() {
  const { order } = useOrder();
  return (
    <ul>
      {order.map((item) => (
        <OrderList item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Order;
