const ItemListContainer = ({greetings}) => {
    const n = 12;
    return (
        <div className="item-list-container">
            {[...Array(n)].map((e, i) => <p key={i}>{greetings}</p>)}
        </div>
    )
}

export default ItemListContainer;