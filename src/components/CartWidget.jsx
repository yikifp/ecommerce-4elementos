import {ReactComponent as CartIcon} from '../assets/svg/cart.svg';

const CartWidget = () => {

    return (
        <button>
        <span className="cart-widget icon">
        <CartIcon />
        </span>
        </button>
    )
}

export default CartWidget;