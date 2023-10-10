import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../mock/data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]=useState([])
    const {categoryId} = useParams()
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                setProductos(res.filter((item)=> item.category === categoryId))
            }else{  
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])   

    return(
        <div>
            <h1>{greeting}</h1>
            <h2><span>{categoryId && categoryId }</span></h2>
            <ItemList productos={productos}/>      
        </div>
    )
}

export default ItemListContainer;