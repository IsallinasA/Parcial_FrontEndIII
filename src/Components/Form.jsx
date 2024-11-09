import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (name.length < 3 || name.startsWith(' ')) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }
    if (food.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    // Si las validaciones pasan, limpiar el error y mostrar el componente Card
    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Comida Favorita:</label>
          <input
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submitted && <Card name={name} food={food} />}
    </div>
  );
};

export default Form;
