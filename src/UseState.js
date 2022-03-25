import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por Favor, escribe el Código de seguridad.</p>

      {error /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
        <p>Error: Código de seguridad incorrecto.</p>
      )}
      <input placeholder="Código de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };
