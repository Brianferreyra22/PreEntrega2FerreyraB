import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
    
    const onAdd = (Cantidad) =>{
        console.log('compraste $ {Cantidad} productos')
    }
    return(
        <div>
            <h1>{props.greetEng}</h1>
            <ItemCount stock={10} onAdd={onAdd}/>
            
        </div>
    );
};

export default ItemListContainer;