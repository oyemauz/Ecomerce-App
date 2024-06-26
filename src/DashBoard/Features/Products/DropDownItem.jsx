import { useState } from "react";
import styled from "styled-components";
import DeleteProduct from "./DeleteProduct";
import PropTypes from "prop-types";
import AddProduct from "./AddProduct";
const DropDown = styled.div`
  position: absolute;
  right: 7%;
  margin-top: 2.4rem;
  transition: all 0.5s;
  padding: 0.4rem 1.6rem;
  background-color: var(--color-slate-100);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  font-size: 1.2rem;
  border-radius: 6px;
`;
DropDownItem.propTypes = {
  item: PropTypes.any,
  setdropdown: PropTypes.any,
};

export default function DropDownItem({ setdropdown, item }) {
  const [isdeleteProduct, setdeleteProduct] = useState(false);
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      <DropDown className="drop_down">
        <div className="edit_item" onClick={() => setEdit(true)}>
          {" "}
          <ion-icon name="create-outline"></ion-icon> Edit
        </div>
        <div onClick={() => setdeleteProduct(!isdeleteProduct)}>
          {" "}
          <ion-icon name="trash-outline"></ion-icon> Delete
        </div>
      </DropDown>
      {isdeleteProduct ? (
        <DeleteProduct
          setdropdown={setdropdown}
          setdeleteProduct={setdeleteProduct}
          itemId={item.id}
        />
      ) : (
        ""
      )}
      {isEdit ? (
        <AddProduct
          setdropdown={setdropdown}
          isEdit={isEdit}
          setEdit={setEdit}
          item={item}
        />
      ) : (
        ""
      )}
    </>
  );
}
