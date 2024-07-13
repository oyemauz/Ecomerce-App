import PropTypes from "prop-types";
import styled from "styled-components";

const LI = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  padding: 1rem 0.4rem;
  font-size: 1.2rem;
  border-bottom: 1px solid var(--color-slate-100);
  img {
    width: 30%;
  }

  ion-icon {
    color: red;
  }
`;

OrderList.propTypes = {
  item: PropTypes.any,
  handleDeleteOrder: PropTypes.func,
};

function OrderList({ handleDeleteOrder, item }) {
  console.log("m->", item);

  return (
    <LI>
      <img src={item.imageUrl} alt={item.name} />
      <span>{item.name}</span>
      <span>{item.price}</span>
      <span>1kg</span>
      <ion-icon
        onClick={() => handleDeleteOrder(item.id)}
        name="close-outline"
      ></ion-icon>
    </LI>
  );
}

export default OrderList;
