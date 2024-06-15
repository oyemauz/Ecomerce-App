import PropTypes from "prop-types";

OrderList.propTypes = {
  item: PropTypes.any,
};

function OrderList({ item }) {
  console.log(item);
  return <div>{item.name}</div>;
}

export default OrderList;
