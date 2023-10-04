import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.descripction}
        </Card.Text>
        <Card.Text>
          {prod.price}
        </Card.Text>
        <Button variant="primary">ver mas</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;