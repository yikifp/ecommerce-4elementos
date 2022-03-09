import ItemList from './ItemList';
import PropTypes from 'prop-types';

const ItemListContainer = ({productList}) => {


    return (
        <div className="item-list-container">
            <div className="content-wrapper">
                <h2 className="title">Tenemos las mejores ofertas para vos</h2>
                <ItemList list={productList} />
            </div>
        </div>
    )
}


ItemListContainer.propTypes = {
    // An array of objects taking on a particular shape
    list: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      copy: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired
  }


export default ItemListContainer;