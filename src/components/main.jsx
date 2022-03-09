import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import products from '../data/products.json';

const Main = () => {

    return (
        <section className="main">
            <div className="container">
            <ItemListContainer productList={products} />
            <ItemDetailContainer productList={products} />
            </div>
        </section>
    )
}

export default Main;