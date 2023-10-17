import React, { useState } from 'react';

const NewUserForm = () => {
  // Definimos el estado para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre_persona: '',
    email: '',
    password: '',
    locacion:'',
    precio_servicio:'',
    perfil:''

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
    // Aquí puedes hacer cualquier validación que necesites antes de enviar los datos
    const userData = JSON.stringify(formData);
    // Aquí puedes enviar `userData` a tu API para crear el usuario
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
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
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default NewUserForm;
