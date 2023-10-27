import React,{useEffect, useState} from "react";
import { getItem } from "../mock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


// eslint-disable-next-line no-unused-vars, no-empty-pattern
const ItemDetailContainer = ({}) => {
    const [producto, setProductos] = useState({})
    const [, setLoader] = useState(false)
    const {id} = useParams()
    
    useEffect(()=>{ 
            getItem(id)
            .then((res)=> setProductos(res))
            .catch((error)=> console.log(error))
            .finally(() => setLoader(false))
     },[id])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}


export default ItemDetailContainer;