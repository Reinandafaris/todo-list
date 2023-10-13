import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Container className="text-center mt-lg-3 mb-lg-3">
        <Row>
          <Col>
            <h1 className="fw-bold">TodoSearch</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
