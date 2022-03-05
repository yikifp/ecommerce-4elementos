import ItemList from './ItemList';
import products from '../data/products.json';

const ItemListContainer = () => {

    return (
        <div className="item-list-container content-wrapper">
            <h2 className="title">Tenemos las mejores ofertas para vos</h2>
            <ItemList list={products} />
        </div>
    )
}


export default ItemListContainer;