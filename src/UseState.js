import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
  });

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!!state.loading) {
      setState({
        ...state,
        error: false,
      });
      setTimeout(() => {
        if(state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
          });

        } else {
          setState({
            ...state,
            loading: false,
            error: true,
          });
        }
        
      }, 3000);
    }
  }, [state.loading]); /*Aca hay que agregar que se va afectar por el useEffect*/

  /*useEffect se explica muy bien en el Curso de React.js: Manejo Profesional del Estado, en Efectos con useEffect */

  console.log(state);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por Favor, escribe el Código de seguridad.</p>

      {state.error /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
        <p>Error: Código de seguridad incorrecto.</p>
      )}
      {state.loading && <p>Cargando...</p>}

      <input
      placeholder="Código de seguridad"
      value = {state.value}
      onChange = {(event) => {setState({
        ...state,
        value: event.target.value,
      })}}
      />
      <button onClick={() => {
        setState({
          ...state,
          loading: true,
        });
      }}>Comprobar</button>
    </div>
  );
}

export { UseState };
