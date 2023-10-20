import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewUserForm = () => {
    const [formData, setFormData] = useState({
        userType: '',
        nombre_persona: '',
        apellido_persona: '',
        email: '',
        password: '',
        locacion: '',
        precio_servicio: '',
        perfil: '',
        calificacion: '',
        status: '',
        //empresa
        nit: '',
        nombre_empresa: '',
        direccion: '',
        telefono_empresa: '',
        estatus: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.stringify(formData);
        console.log(userData);
    };

    return (
        <>
            <div className="body-login">
                <div className="logo-box">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userType">
                            <Form.Label>Tipo de Usuario:</Form.Label>
                            <Form.Control
                                as="select"
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione un tipo</option>
                                <option value="user">Usuario</option>
                                <option value="company">Empresa</option>
                            </Form.Control>
                        </Form.Group>
                        {formData.userType === 'user' && (
                            <>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="nombre_persona">
                                            <Form.Label>Nombre:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="nombre_persona"
                                                value={formData.nombre_persona}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="apellido_persona">
                                            <Form.Label>Apellido:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="apellido_persona"
                                                value={formData.apellido_persona}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="email">
                                    <Form.Label>Correo Electrónico:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="locacion">
                                    <Form.Label>Locación:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="locacion"
                                        value={formData.locacion}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="precio_servicio">
                                    <Form.Label>Precio del Servicio:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="precio_servicio"
                                        value={formData.precio_servicio}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="perfil">
                                    <Form.Label>Perfil:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="perfil"
                                        value={formData.perfil}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="calificacion">
                                    <Form.Label>Calificación:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="calificacion"
                                        value={formData.calificacion}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="status">
                                    <Form.Label>Status:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </>
                        )}

                        {formData.userType === 'company' && (
                            <>
                                <Form.Group controlId="nit">
                                    <Form.Label>Nit de la Empresa:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nit"
                                        value={formData.nit}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="nombre_empresa">
                                    <Form.Label>Nombre de la Empresa:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre_empresa"
                                        value={formData.nombre_empresa}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="direccion">
                                    <Form.Label>Dirección de la Empresa:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="direccion"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Correo Electrónico:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="telefono_empresa">
                                    <Form.Label>Teléfono de la Empresa:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="telefono_empresa"
                                        value={formData.telefono_empresa}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                            </>
                        )}
<div className="d-flex-block mr-2">
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                        <Link to="/">
                            <Button variant="secondary">Atrás</Button>
                        </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default NewUserForm;
