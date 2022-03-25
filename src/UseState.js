import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la Validación");

        setLoading(false);

        console.log("Terminando la Validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [loading]); /*Aca hay que agregar que se va afectar por el useEffect*/

  /*useEffect se explica muy bien en el Curso de React.js: Manejo Profesional del Estado, en Efectos con useEffect */

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por Favor, escribe el Código de seguridad.</p>

      {error /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
        <p>Error: Código de seguridad incorrecto.</p>
      )}
      {loading && <p>Cargando...</p>}

      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
