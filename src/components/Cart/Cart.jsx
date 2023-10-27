import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clear, total} = useContext(CartContext)
  return (
    <div>
        {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
        {cart.length
        ? <><div>
                  <p>Total a pagar ${total()}</p>
              </div><div>
                      <button className='btn btn-danger' onClink={clear}>Vaciar Carrito</button>
                      <Link className='btn btn-dark'>terminar Cbuttonompra</Link>
                  </div></>
        : <div>
            <h3>Tu carrito esta Vacio! </h3>
            <Link to="/" classname="btn btn-dark">Ir a comprar</Link>
        </div>
    }
    </div>
  )
}

export default Cart