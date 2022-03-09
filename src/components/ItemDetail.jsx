
const ItemDetail = ({item}) => {

    const {name, copy, price} = item;

    return (
        <div className="item-list-container">
            <p>{name}</p>
            <p>{copy}</p>
            <h4 className="price">
            <span>Super oferta! </span> 
            <span>${price}</span>
            </h4>
        </div>
    )
}


export default ItemDetail;