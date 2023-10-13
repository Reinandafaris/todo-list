import { Container, Row, Col } from 'react-bootstrap';

const TodoList = ({ onAllClick, onDoneClick, onTodoClick }) => {
  function handleAllClick(e) {
    e.preventDefault();
    onAllClick();
  }

  function handleDone(e) {
    e.preventDefault();
    onDoneClick();
  }

  function handleTodo(e) {
    e.preventDefault();
    onTodoClick();
  }

  return (
    <div>
      <Container className="text-center mt-2 mb-2">
        <Row>
          <Col>
            <h2>TodoList</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <button className="tiga-tombol" onClick={handleAllClick}>
              All
            </button>
          </Col>

          <Col>
            <button className="tiga-tombol" onClick={handleDone}>
              Done
            </button>
          </Col>

          <Col>
            <button className="tiga-tombol" onClick={handleTodo}>
              Todo
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
