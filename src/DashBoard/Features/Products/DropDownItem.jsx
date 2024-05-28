import { useState } from "react";
import styled from "styled-components"
import DeleteProduct from "./DeleteProduct";
import PropTypes from "prop-types";
const DropDown = styled.div`
position:absolute;
right:7%;
margin-top:2.4rem;
transition:all .5s;
padding:.4rem 1.6rem;
background-color:var(--color-slate-100);
display:flex;
flex-direction:column;
gap:1.4rem;
font-size:1.2rem;
border-radius:6px;
`;
DropDownItem.propTypes = {
  itemId: PropTypes.any,
  setdropdown: PropTypes.bool
}


export default function DropDownItem({ setdropdown, itemId }) {
  const [isdeleteProduct, setdeleteProduct] = useState(false);
  return (
    <>
      <DropDown className="drop_down">
        <div className="edit_item"> <ion-icon name="create-outline"></ion-icon> Edit</div>
        <div onClick={() => setdeleteProduct(!isdeleteProduct)}> <ion-icon name="trash-outline"></ion-icon> Delete</div>
      </DropDown>
      {isdeleteProduct ? <DeleteProduct setdropdown={setdropdown} setdeleteProduct={setdeleteProduct} itemId={itemId} /> : ''}
    </>
  )
}
