import { useState, useEffect } from 'react';
import Item from './Item';
import {ReactComponent as LoaderIcon} from '../assets/svg/loader.svg';

const ItemList = ({list}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        setTimeout(() => {
            setProducts(list);
            setLoading(false);
        },2000)
    })

    return (
    <>
        {loading ? <LoaderIcon /> :
        <ul className="list-wrapper">
            {products.map((item, index) => <Item key={index} name={item.name} price={item.price} />)}
        </ul>
        }
    </>
    )
}

export default ItemList;