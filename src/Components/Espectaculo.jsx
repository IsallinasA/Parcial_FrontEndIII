import React from "react";

const Espectaculo = ({ elemento, setisSelected }) => {
  console.log(elemento);
  return (
    <div>
      <img src={elemento.img} alt="" />
      <h3>{elemento.artista}</h3>
      <h4>{elemento.fecha}</h4>
      <h2>{elemento.precio}</h2>
      <button
        onClick={() =>
          setisSelected({ artista: elemento.artista, status: true })
        }
      >
        Quiero ir
      </button>
    </div>
  );
};

export default Espectaculo;
