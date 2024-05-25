import styled from "styled-components"
import Stars from "../Stars";
import PropTypes from "prop-types";
import Logos from '../../utils/db.categories';

const Div=styled.div`

    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 2.5px 5px 2.5px;
    flex-direction: column;
    border: 1px solid var(--color-slate-200);
    font-size: 1.4rem;
    // margin-top:1.4rem;
`;

const ItemIcons=styled.div`

    display: flex;
    align-items: center;
    gap: 6rem;
    padding-bottom: 2rem;
    &last-child{
        background-color: var(--color-neutral-800);
    }

`;

const Img=styled.img`

width: 50%;
height: 45%;
`;

const ItemName=styled.p`

font-size: 1.4rem;
    margin-top: 30px;
    font-weight: 600;
    width: 70%;
    text-align: center;
`;

const Stock=styled.p`
margin:20px 0 10px 0;
color:green;
font-weight:500;
`;

const StarRating=styled.div`
display: flex;
gap: 10rem;
margin-bottom: 4rem;
`;

const Price=styled.p`
font-weight:600;
letter-spacing:1.5px;
`;

CategoryItem.propTypes = {
    item: PropTypes.any,
}

function CategoryItem({item}) {
    // console.log(item)
    return (
        <Div>
            <Img src={item.imageUrl} alt={item.name}/>
            <ItemName>{item.name} {item.quantity}</ItemName>
            <Stock>In {item.status}</Stock>

            <StarRating>
                <Stars/>
                <Price style={{}}>{item.price} {item.unitPrice}</Price>
            </StarRating>

            <ItemIcons className="icons">
                <span><ion-icon name={Logos.wishlist_logo}></ion-icon></span>
                <span><ion-icon name={Logos.share_logo}></ion-icon></span>
                <span className="last"><ion-icon name={Logos.cart_logo}></ion-icon></span>
            </ItemIcons>
        </Div>
    )
}

export default CategoryItem
