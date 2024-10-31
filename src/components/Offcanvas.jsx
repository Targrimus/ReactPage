import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 container-fluid">
          <Container fluid>
            <Navbar.Brand href="#">
                <span><span className="fw-bold">AKSA</span> | Ekipman Bilgi Sistemi</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ekipman Listesi
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Talimatlar</Nav.Link>
                  <Nav.Link href="#action2">Dokumanlar</Nav.Link>
                  <NavDropdown
                    title="BİGA"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      BR003
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR006
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      BR009
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="ÇANAKKALE"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      BR001
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR002
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR003
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR004
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR005
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR006
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      BR007
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      BR025
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="İstasyon Ara"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Ara</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;