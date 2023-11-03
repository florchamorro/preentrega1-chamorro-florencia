import "./ItemListContainer.css"
export const ItemListContainer = (props) =>{
    const{ producto, id ,precio,} = props
    return(

    
        <div className="card">
            <h1 className="card-text">{producto}</h1>
            <p className="card-text">Numero de clase {id}</p>
            <h2 className="card-text"> Precio:${precio}</h2>
        </div>
    )
}
export default ItemListContainer;