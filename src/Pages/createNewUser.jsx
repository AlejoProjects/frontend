import React, { useState } from 'react';

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
            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="userType">Tipo de Usuario:</label>
                        <select
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="user">Usuario</option>
                            <option value="company">Empresa</option>
                        </select>
                    </div>
                    {formData.userType === 'user' && (
                        <>
                            <div>
                                <label htmlFor="nombre_persona">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre_persona"
                                    name="nombre_persona"
                                    value={formData.nombre_persona}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="apellido_persona">Apellido:</label>
                                <input
                                    type="text"
                                    id="apellido_persona"
                                    name="apellido_persona"
                                    value={formData.apellido_persona}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="locacion">Locación:</label>
                                <input
                                    type="locacion"
                                    id="locacion"
                                    name="locacion"
                                    value={formData.locacion}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="precio_servicio">Precio del Servicio:</label>
                                <input
                                    type="precio_servicio"
                                    id="precio_servicio"
                                    name="precio_servicio"
                                    value={formData.precio_servicio}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="perfil">Perfil:</label>
                                <input
                                    type="perfil"
                                    id="perfil"
                                    name="perfil"
                                    value={formData.perfil}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="calificacion">Calificación:</label>
                                <input
                                    type="calificacion"
                                    id="calificacion"
                                    name="calificacion"
                                    value={formData.calificacion}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="status">Status:</label>
                                <input
                                    type="status"
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </>
                    )}
                    {formData.userType === 'company' && (
                        <><div>
                            <label htmlFor="nit">Nit de la Empresa:</label>
                            <input
                                type="text"
                                id="nit"
                                name="nit"
                                value={formData.nit}
                                onChange={handleChange}
                                required />
                        </div><div>
                                <label htmlFor="nombre_empresa">Nombre de la Empresa:</label>
                                <input
                                    type="text"
                                    id="nombre_empresa"
                                    name="nombre_empresa"
                                    value={formData.nombre_empresa}
                                    onChange={handleChange}
                                    required />
                            </div>


                            <div>
                                <label htmlFor="direccion">Dirección de la Empresa:</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="telefono">Telefono de la Empresa:</label>
                                <input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </>
                    )}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export default NewUserForm;
