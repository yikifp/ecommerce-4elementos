import { useState } from "react";
import PropTypes from 'prop-types';

const ItemCounter = ({stock = 5, onAdd}) => {

    const [counter, setCounter] = useState(0);

    const addToCounter = () => {
        setCounter(Math.min(stock, counter + 1));
    }

    const substractToCounter = () => {
        setCounter(Math.max(0, counter - 1));
    }

    return (
        <div className="counter-wrapper">
            <button className="counter-button" onClick={addToCounter}>+</button>
            <span className="counter-copy">
                {counter}
            </span>
            <button className="counter-button" onClick={substractToCounter}>-</button>
            <button className="add-to-cart" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

ItemCounter.propTypes = {
    stock: PropTypes.number,
    onAdd: PropTypes.func
}

export default ItemCounter;