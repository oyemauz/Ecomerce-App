import Search from './Search';
import Data from '../../utils/db.appdata';
import Logo from './Logo';
import usePdata from '../../ThemeContext/usePData';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

function HeaderWishListCart() {
    const{sidebar,setSidebar,menu,toggleMenu}=usePdata();
    const isMobile = useMediaQuery({ maxWidth: 800 });

    useEffect(() => {
        if (isMobile) {
            setSidebar(true); // Call toggleSidebar to set sidebar to true
        }
        else{
            setSidebar(false); // Call toggleSidebar to set sidebar to falseset
        }
      }, [isMobile, setSidebar]); 
      
    
    return (
        <>
        <div className='flexBetween wishListcart'>
            {sidebar?<div onClick={toggleMenu} className={`${menu ?"menu":null}`} ><ion-icon  name="menu-outline"></ion-icon></div>:<Logo/>}
            <Search/>
            <div className='flexBetween gap hideWishlist'>
                <span className='flexGap'><ion-icon  name={Data.common.wishList.logo}></ion-icon><span>{Data.common.wishList.wishList}</span></span>
                <span className='flexGap'><ion-icon  name={Data.common.cart.logo}></ion-icon>
                    <div className='flexDirection' style={{fontWeight:"500"}}>{Data.common.cart.shoppingCart} <p>0 items. 0.00</p></div>
                </span>
            </div>
        </div>
        </>
    )
}

export default HeaderWishListCart
