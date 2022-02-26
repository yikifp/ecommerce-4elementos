import CartWidget  from './CartWidget';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {

    return (
        <header>
            <div className="header-content content-wrapper">
            <h1>Tienda de productos informáticos</h1>
            <nav className="nav">
                <a href="#" className="item">PC Gamer</a>
                <a href="#" className="item">Oficinas</a>
                <a href="#" className="item">Contacto</a>
            </nav>
            <CartWidget />
            </div>
        </header>
    )
}

export default Header;