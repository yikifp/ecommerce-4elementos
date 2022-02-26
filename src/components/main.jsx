import ItemListContainer from './ItemListContainer';

const Main = () => {

    return (
        <section className="main">
            <div className="container">
            <ItemListContainer greetings={'Bienvenidos a nuestro store'} />
            </div>
        </section>
    )
}

export default Main;