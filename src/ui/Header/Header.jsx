import HeaderWishListCart from "./HeaderWishListCart"
import MainNavbar from "./MainNavbar"
import TopNavbar from "./TopNavbar"
import  usePdata  from "../../ThemeContext/usePData";


function Header() {
    const s=usePdata();
    return (
        <header style={{paddingBottom:"3rem"}}>
            {s.sidebar || <TopNavbar/>}
            <HeaderWishListCart/>
           {s.sidebar ||  <MainNavbar/> }
        </header>
    )
}

export default Header

