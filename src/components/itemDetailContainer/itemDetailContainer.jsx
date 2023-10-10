import React,{useEffect, useState} from "react";
import itemDetail from "../itemDetail/itemDetail";
import { getItem } from "../mock/data";
import { useParams } from "react-router-dom";


const ItemListContainer = ({}) => {
    const [productos, setProductos]=useState({})
    const [loader, setLoader] = useState(false)
    const {id} = useParams()
    
    useEffect(()=>{ 
        setLoader(true)
            getItem(id)
            .then((res)=> setProductos(res))
            .catch((error)=> console.log(error))
            .finally(() => setLoader(false))
     },[])

    return(
        <div>
            <itemDetail producto={producto}/>
        </div>
    )
};

export default itemDetailContainer;