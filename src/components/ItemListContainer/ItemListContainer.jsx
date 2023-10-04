import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import imagen from "./../img/billeteras/11.png";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]=useState([])
    const list = [
        {id: '01', name: 'billetera', stock: '5', price: '2500', description: 'lorenlorenloren', img: imagen},
        {id: '02', name: 'billetera', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/ftSthSs0/10.png'}
    ]
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            let error = false
            setTimeout(()=>{
                if (error){
                    reject("no hay data, intente mas tarde")
                }
                else{
                    resolve(list)
                }
            },2000)
        })
    }
    useEffect(()=>{
        getProducts()
        .then((res)=> setProductos(res))
        .catch((error)=> console.log(error))
    },[])   
    const onAdd = (Cantidad) =>{
        console.log('compraste $ {Cantidad} productos')
    }

    console.log(productos)
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            
        </div>
    );
};

export default ItemListContainer;