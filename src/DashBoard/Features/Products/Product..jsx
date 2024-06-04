import DropDownItem from "./DropDownItem";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

ProductsList.propTypes = {
  item: PropTypes.any,
};

const DropDown = styled.div`
  cursor: pointer;

  &:hover {
  }
`;

export default function ProductsList({ item }) {
  const [isdropdown, setdropdown] = useState(false);

  return (
    <div className="product_row" style={{ height: "6.4rem" }}>
      <img src={item.imageUrl} alt={item.name} />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.status}</div>
      <div>{item.quantity}</div>

      <DropDown
        className="product_dropdown"
        onClick={() => setdropdown(!isdropdown)}
      >
        <svg
          fill="#000000"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </DropDown>
      {isdropdown ? <DropDownItem setdropdown={setdropdown} item={item} /> : ""}
    </div>
  );
}
