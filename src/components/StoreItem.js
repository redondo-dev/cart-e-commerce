import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';

const StoreItem = ({ id, price, title, image, description }) => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <Card style={{ width: '30rem', margin: 'auto' }}>
      <Card.Img variant="top" src={image} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='fs-2'>{title}</span>
          <span className='me-2'>{price}$</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button variant="primary" className='w-100' onClick={() => increaseCartQuantity(id)}>
              Ajouter au panier
            </Button>
          ) : (
            <div className='d-flex align-items-center justify-content-center flex-column' style={{ gap: '0.5rem' }}>
              <div className='d-flex align-items-center justify-content-center' style={{ gap: '0.5rem' }}>
                <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                <span>{quantity} in cart</span>
                <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={()=> removeItemFromCart(id)}>
                Supprimer du panier
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
