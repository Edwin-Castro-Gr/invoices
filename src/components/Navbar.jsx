import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import * as React from 'react';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href='/'>Invoice Service</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Clients" id="basic-nav-dropdown">
                            <NavDropdown.Item href='/FormClient'>New Client</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/TableClient'>All Clients</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href='/FormProject'>New Project</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/TableProject'>All Project</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Invoices" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Invoice">New Invoices </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Login">Login </NavDropdown.Item>
                            <NavDropdown.Item href="/Login">Logout </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
