import Card from 'react-bootstrap/Card';

function CasesConter() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Total Cases</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          4130538
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default CasesConter;
