import {BsCart2} from "react-icons/bs"
import Badge from "react-bootstrap/Badge";
const CartWidget = () =>{
    return (
        <div>
            <BsCart2 fontSize={"1.5rem"}/>
            <Badge bg="danger">+</Badge>
        </div>
    );
};

export default CartWidget;