import React, { useState } from 'react'
import Button from "react-bootstrap/Button";


const ItemCount = ({stock, onAdd, }) => {
    const [count, setcount] = useState (1)
    const sumar = () => {
        if(count < stock){
        setcount(count + 1)}
    }
    const restar = () => {
        if (count > 0){
        setcount(count - 1)}}
  return (
    <div className='d-flex flex-column align-items-center jutify-content-between'>
        <div>
            <Button variant="dark" onClick={restar}>-</Button>
            <span className='btn'>{count}</span>
            <Button variant="dark"onClick={sumar}>+</Button>
        </div>
        <Button className='mt-2' variant="success" disabled={count===0} onClick={()=>onAdd(count)}>Comprar</Button>
    </div>
    
  );
};

export default ItemCount;
