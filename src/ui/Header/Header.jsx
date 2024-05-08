import HeaderWishListCart from "./HeaderWishListCart"
import MainNavbar from "./MainNavbar"
import TopNavbar from "./TopNavbar"
import  usePdata  from "../../ThemeContext/usePData";


function Header() {
    const s=usePdata();
    console.log("header-> ",s.sidebar);
    return (
        <header>
            {s.sidebar || <TopNavbar/>}
            <HeaderWishListCart/>
           {s.sidebar ||  <MainNavbar/> }
        </header>
    )
}

export default Header

