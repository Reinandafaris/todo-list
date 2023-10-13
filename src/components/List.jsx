import { Container, Row, Col } from 'react-bootstrap';

const List = ({ items, onDeleteItem, onToggleItem, onEditItem }) => {
  return (
    <div>
      <Container>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onEditItem={onEditItem} />
        ))}
      </Container>
    </div>
  );
};

function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  function handleEdit(e) {
    e.preventDefault();
    const newText = prompt('Edit item:', item.task);
    if (newText !== null) {
      onEditItem(item.id, newText);
    }
  }

  return (
    <Row className="per-list mt-3" key={item.id}>
      <Col>
        <li className="urutan">
          <span style={item.complete ? { textDecoration: 'line-through', textDecorationColor: 'red' } : {}}>{item.task}</span>
        </li>
      </Col>

      <Col className="col-3">
        <input type="checkbox" checked={item.complete} onChange={() => onToggleItem(item.id)} />
        <i className="pensil fa-solid fa-pen" onClick={handleEdit}></i>
        <i onClick={() => onDeleteItem(item.id)} className="sampah fa-solid fa-trash"></i>
      </Col>
    </Row>
  );
}

export default List;
