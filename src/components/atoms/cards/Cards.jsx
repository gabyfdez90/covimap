import React from "react";
import Card from 'react-bootstrap/Card';

export default function Cards({ imgSrc, title, text }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className="text-dark">{title}</Card.Title>
        <Card.Text className="text-dark">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}



