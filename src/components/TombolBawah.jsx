import { Container, Row, Col } from 'react-bootstrap';

const TombolBawah = ({ onDeleteDoneClick, onClearItems }) => {
  function handleDeleteDoneTasks(e) {
    e.preventDefault();
    onDeleteDoneClick();
  }

  return (
    <div>
      <Container className="text-center mt-2 mb-2">
        <Row>
          <Col>
            <button className="tombol-bawah" onClick={handleDeleteDoneTasks}>
              Delete done tasks
            </button>
          </Col>

          <Col className="col-1"></Col>

          <Col>
            <button onClick={onClearItems} className="tombol-bawah">
              Delete all tasks
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TombolBawah;
