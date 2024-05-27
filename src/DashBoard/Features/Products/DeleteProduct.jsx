import styled from "styled-components"
import { DeleteProductDoc } from "../../../Api/getProductsDetails";

const DeleteDoc=styled.section`
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

export default function DeleteProduct() {
  return (
    <DeleteDoc>
        <h2> <ion-icon name="warning-outline"></ion-icon> Are you Sure You want to Delete Product ?</h2>
        <div>
            <button>Cancel</button>
            <button onClick={()=>DeleteProductDoc}>Delete</button>
        </div>
    </DeleteDoc>
  )
}
