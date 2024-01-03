import React from 'react';
import {Card , Button} from 'react-bootstrap';


const StoreItem = ({id,price,title, image,description}) => {
    return (
        
            <Card style={{ width: '30rem', margin:'auto'}}>
              <Card.Img variant="top" src={image}  style={{height:"300px" ,objectFit:'cover'}}/>
              <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline'>
                   <span className='fs-2'>{title}</span>
                    <span className='me=2'>{price}$</span>
                </Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Ajouter au panier</Button>

               <Button>+</Button>
                <span>1 artcile</span>
               <Button>-</Button>
                <br/><br />   
                <Button variant="danger">Supprimer du panier</Button>
              </Card.Body>
            </Card>
    
    );
}

export default StoreItem;

