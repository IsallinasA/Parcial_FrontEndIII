import React from 'react';

const Card = ({ name, food }) => {
  return (
    <div style={{ border: '1px solid #000', padding: '10px', marginTop: '10px' }}>
      <h3>La comida favorita de {name} es: {food}</h3>
    </div>
  );
};

export default Card;
