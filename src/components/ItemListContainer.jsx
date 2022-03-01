import ItemCounter from "./ItemCount";

const ItemListContainer = ({greetings}) => {

    return (
        <div className="item-list-container">
            <p>{greetings}</p>
            <ItemCounter onAdd={() => console.log('agregado al carrito')} />
        </div>
    )
}

export default ItemListContainer;