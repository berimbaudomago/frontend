import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Eu sou o mago</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home.html">Página Inicial</Nav.Link>
            <Nav.Link href="/Apostas.html">Apostar</Nav.Link>
            <Nav.Link href="/Detalhes.html">Detalhes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;