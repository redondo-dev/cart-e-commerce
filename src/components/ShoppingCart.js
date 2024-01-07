import React from 'react';
import {Offcanvas, Stack} from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import StoreItems from '../data/storeItems.json';
import CartItem from './CartItem';

const ShoppingCart = ({isOpen}) => {
  const {cartItems,closeCart} = useShoppingCart();   
  return (
     
   <Offcanvas show={isOpen} onHide={closeCart} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
          
            {cartItems.map((item)=>(
                <cartItems key= {item.id}{...item}
                />
            ))}
         </Stack>
        </Offcanvas.Body>
      </Offcanvas>
      
    );
}

export default ShoppingCart;
