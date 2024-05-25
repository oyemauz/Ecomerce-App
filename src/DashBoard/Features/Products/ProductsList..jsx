import PropTypes from "prop-types";

ProductsList.propTypes = {
    item: PropTypes.any,
}

export default function ProductsList({item}) {
  return (
    
    <div className="product_row" style={{height:"6.4rem"}}>
        <img src={item.imageUrl} alt={item.name}/>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.status}</div>
        <div>{item.quantity}</div>
  </div>
  )
}
