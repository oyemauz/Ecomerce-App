import styled from "styled-components";
import { DeleteProductDoc } from "@/api/getProductsDetails";
import PropTypes from "prop-types";
import Button from "@/ui/common/Button";
import toast from "react-hot-toast";

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
  border: 6px;
`;

DeleteProduct.propTypes = {
  itemId: PropTypes.any,
  setdropdown: PropTypes.any,
  setdeleteProduct: PropTypes.any,
};

const DIV = styled.div`
  margin-top: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;

  .btn {
    padding: 0.4rem 1.4rem;
    border: none;
    border-radius: 5px;
  }

  .btn_cancel {
    background-color: var(--color-slate-100);
  }

  .delete_btn {
    color: #fff;
    background-color: var(--color-red-700);
  }
`;

export default function DeleteProduct({
  setdropdown,
  setdeleteProduct,
  itemId,
}) {
  function deleteItem() {
    DeleteProductDoc(itemId);
    toast.success("Item Successfully deleted");
    setdeleteProduct(false);
    setdropdown(false);
  }

  return (
    <DeleteDoc>
      <h2>
        {" "}
        <ion-icon name="warning-outline"></ion-icon> Are you Sure You want to
        Delete Product ?
      </h2>
      <DIV>
        <button
          className="btn btn_cancel"
          onClick={() => {
            setdeleteProduct(false);
            setdropdown(false);
          }}
        >
          Cancel
        </button>
        <Button className="btn delete_btn" onClick={deleteItem}>
          Delete
        </Button>
      </DIV>
    </DeleteDoc>
  );
}
