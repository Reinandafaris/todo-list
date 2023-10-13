import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    onSearch(search);

    if (!search) return;

    setSearch('');
  }

  return (
    <form>
      <Container className="search-box text-center">
        <Row className="mt-2 mb-2">
          <Col>
            <i className="kaca fa-solid fa-magnifying-glass"></i>
            <input className="isi-form mb-2" type="search" placeholder="Search Todo" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Col>
              <button className="tombol-search" onClick={handleSearch}>
                Search
              </button>
            </Col>
          </Col>

          <Col className="col-1"></Col>

          <Col className="search-kanan">
            <Col>
              <Link to="/input">
                <button className="tombol-add">Add new Task</button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Search;
