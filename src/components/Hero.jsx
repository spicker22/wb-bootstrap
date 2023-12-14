import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function Hero({ title, lead }) {
  return (

    // Content takes up full width of screen because of 'fluid
    // 'text-center' centers the contect, 
    // 'py-5' gives it padding, 
    // 'bg-light' sets background color to light shade. 
    <Container fluid className="text-center py-5 bg-light">

      {/* padding applies to large screens */}
      <Row className="py-lg-5">

        {/* "mx-auto" centers the content */}
        <Col lg="6" md="8" className="mx-auto">

          {/* Applies the "fw-light" to the title */}
          <h1 className="fw-light">{title}</h1>

           {/* lead -> increases font size, text-muted-> less important text */}
          <p className="lead text-muted">{lead}</p>
        </Col>
      </Row>
    </Container>
  );
}




