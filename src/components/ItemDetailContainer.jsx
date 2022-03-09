import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {ReactComponent as LoaderIcon} from '../assets/svg/loader.svg';

const ItemDetailContainer = ({productList}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setProduct(productList[0]);
            setLoading(false);
        },2000)
    })

    return (
        <div className="item-list-container">
            <div className="content-wrapper">
                <h2 className="title">Detalles del producto:</h2>
                {loading ? <LoaderIcon /> :  <ItemDetail item={product} />}
            </div>
        </div>
    )
}


export default ItemDetailContainer;