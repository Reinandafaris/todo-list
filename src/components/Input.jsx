import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function Input({ onAddItem }) {
  const [task, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newItem = { id: Date.now(), task, complete: false };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
  }

  return (
    <form className="konten">
      <form>
        <Container className="text-center mt-lg-3 mb-lg-3">
          <Row>
            <Col>
              <h3 className="fw-bold">TodoInput</h3>
            </Col>
          </Row>
        </Container>

        <Container className="search-box text-center">
          <Row className="mt-2 mb-2">
            <Col>
              <i className="kaca fa-solid fa-magnifying-glass"></i>
              <input className="isi-form mb-2" type="text" placeholder="Input/Edit Todo" value={task} onChange={(e) => setName(e.target.value)} />
              <Col>
                <button className="tombol-submit" onClick={handleSubmit}>
                  Submit
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </form>
    </form>
  );
}
