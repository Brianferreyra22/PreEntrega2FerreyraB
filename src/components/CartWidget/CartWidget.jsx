import {BsCart2} from "react-icons/bs"
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
const CartWidget = () =>{
    const {cartQuantity} = useContext(useContext)
    return (
        <div>
            <BsCart2 fontSize={"1.5rem"} color="black"/>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    );
};

export default CartWidget;