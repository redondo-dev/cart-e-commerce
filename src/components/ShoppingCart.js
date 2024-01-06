import React from 'react';
import {Offcanvas} from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = ({isOpen}) => {
  const {cartItems,closeCart} = useShoppingCart();   
  return (
     
   <Offcanvas show={isOpen} onHide={closeCart} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
            {cartItems.map((item)=>(
                <cartItems key= {item.id}{...item}
                />
            ))}
         
        </Offcanvas.Body>
      </Offcanvas>
      
    );
}

export default ShoppingCart;
