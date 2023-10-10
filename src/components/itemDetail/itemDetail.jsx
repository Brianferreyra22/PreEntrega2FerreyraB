import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

const itemDetail =({producto}) => {
    const onAdd = (cantidad) => {
        const onAdd = (Cantidad) =>{
            console.log('compraste $ {Cantidad} productos')
        }
    }
        return (   
        <div className="d-flex flex-column align-items-center">
            <h3>Detalle de :{producto.name}</h3>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.descripcion}</p>
            <p>${producto.price}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
        )
}

export default itemDetail; 