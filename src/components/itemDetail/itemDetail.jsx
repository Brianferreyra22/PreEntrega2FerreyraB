import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({producto}) => {
    const [quantilyAddeb, setQuantilyAddeb] = useState("")

    const {addItem} = CartContext (CartContext)
    
    const onAdd = (cantidad) => {
        setQuantilyAddeb(cantidad)
        addItem(producto, cantidad )
    }

        return (   
        <div className='d-flex flex-column align-items-center'>
            <h3>Detalle de :{producto.name}</h3>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.descripcion}</p>
            <p>${producto.price}</p>
            {quantilyAddeb === '' ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            : <Link to='/cart' className='btn bte-dark'>Ir al Carrito </Link>}
        
        </div>
        )
}

export default ItemDetail; 