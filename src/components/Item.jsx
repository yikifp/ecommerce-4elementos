
const Item = ({id, name, price}) => {

  return (
    <li className="item-wrapper">
      <button className="item-link">
        <p>{name}</p>
        <h4 className="price">
          <span>Super oferta! </span> 
          <span>${price}</span>
        </h4>
      </button>
    </li>
    )
}


export default Item;