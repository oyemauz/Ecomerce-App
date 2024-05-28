import styled from "styled-components"
import { DeleteProductDoc } from "@/api/getProductsDetails";
import PropTypes from "prop-types";


const DeleteDoc = styled.section`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: var(--color-grey-0);
border-radius: var(--border-radius-lg);
box-shadow: var(--shadow-lg);
padding: 3.2rem 6rem;
transition: all 0.5s ease 0s;
border:6px;

`;

DeleteProduct.propTypes = {
  itemId: PropTypes.any,
  setdropdown: PropTypes.bool,
  setdeleteProduct: PropTypes.bool
}

export default function DeleteProduct({ setdropdown, setdeleteProduct, itemId }) {

  function deleteItem() {
    DeleteProductDoc(itemId);
    setdeleteProduct(false);
    setdropdown(false);
  }

  return (
    <DeleteDoc>
      <h2> <ion-icon name="warning-outline"></ion-icon> Are you Sure You want to Delete Product ?</h2>
      <div>
        <button onClick={() => { setdeleteProduct(false); setdropdown(false) }}>Cancel</button>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </DeleteDoc>
  )
}
