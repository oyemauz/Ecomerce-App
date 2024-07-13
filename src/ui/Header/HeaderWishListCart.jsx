import Search from "./Search";
import Data from "../../utils/db.appdata";
import Logo from "./Logo";
import useProduct from "../../ThemeContext/useProduct";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useOrder } from "@/contextApi/orderDetails";
import styled from "styled-components";

const DIV = styled.div`
  button {
    border: none;
    background-color: #fff;
  }
  button span {
    font-weight: 600;
  }
  button:hover {
    color: var(--color-lime-500);
  }
`;

function HeaderWishListCart() {
  const { sidebar, setSidebar, menu, toggleMenu } = useProduct();
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const { order, offCanvas, setOffCanvas } = useOrder();

  useEffect(() => {
    if (isMobile) {
      setSidebar(true); // Call toggleSidebar to set sidebar to true
    } else {
      setSidebar(false); // Call toggleSidebar to set sidebar to false
    }
  }, [isMobile, setSidebar]);

  return (
    <DIV className="flexBetween wishListcart">
      {sidebar ? (
        <div onClick={toggleMenu} className={`${menu ? "menu" : null}`}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      ) : (
        <Logo />
      )}
      <Search />
      <div className="flexBetween gap hideWishlist">
        <span className="flexGap">
          <ion-icon name={Data.common.wishList.logo}></ion-icon>
          <span>{Data.common.wishList.wishList}</span>
        </span>
        <span className="flexGap">
          <ion-icon name={Data.common.cart.logo}></ion-icon>
          <div className="flexDirection" style={{ fontWeight: "500" }}>
            <button className="btn" onClick={() => setOffCanvas(!offCanvas)}>
              <span>Shopping Cart</span>
              <p>{order.length} items</p>
            </button>
          </div>
        </span>
      </div>
    </DIV>
  );
}

export default HeaderWishListCart;
