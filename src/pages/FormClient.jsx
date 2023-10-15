
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Nav from '../components/Navbar';
import "../css/style.css";

export default function FormClient() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Nav />
            <div className="App-header">
                <main style={{ marginTop: "-180px", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Sheet
                        sx={{
                            textAlign: 'center',
                            width: 1000,
                            my: 20,
                            py: 3,
                            px: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            borderRadius: 'sm',
                            boxShadow: 'md',
                        }}
                        variant="outlined"
                    >
                        <div>
                            <Typography level="h4" component="h1">
                                <h1>New Client</h1>
                            </Typography>
                        </div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Name Client</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name Client"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Nit</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nit"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Direction</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder='Direction'
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Direction.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Number phone</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder='Number Phone'
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Number phone.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder='Email'
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                            <Button type="submit" style={{ marginTop: "20px" }}>
                                Submit form
                            </Button>

                        </Form>
                    </Sheet>
                </main>
            </div >
        </>
    );
}    