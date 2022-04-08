import React from "react";

const SECURITY_CODE = "paradigma";

function UseStateD({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    delete: false, // para mostrar el input
    confirm: false, // para confirmar el input
  });

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirm: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
      setState({
        ...state,
        loading: true,
      });
  }

    const onDelete = () => {
        setState({
            ...state,
            delete: true,
            value: '',
        });
    }

    const onReset = () => {
        setState({
            ...state,
            delete: false,
            confirm: false,
            value: "",
          });
    }

  React.useEffect(() => {
    if (!!state.loading) {
      setState({
        ...state,
        error: false,
      });
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [
    state.loading,
  ]); /*Aca hay que agregar que se va afectar por el useEffect*/

  /*useEffect se explica muy bien en el Curso de React.js: Manejo Profesional del Estado, en Efectos con useEffect */

  console.log(state);

  if (!state.delete && !state.confirm) {
    return (
      <>
        <h2>Eliminar {name}</h2>

        <p>Por Favor, escribe el Código de seguridad.</p>

        {state.error &&
          !state.loading /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
            <p>Error: Código de seguridad incorrecto.</p>
          )}
        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => onWrite(event.target.value)}
        />
        <button
          onClick={ () => {
              onCheck();
          }}
        >
          Comprobar
        </button>
        <h1>{state.value}</h1>
      </>
    );
  } else if (!!state.confirm && !state.delete) {
    return (
      <>
        <p>Pedimos confirmación ¿Desea Continuar?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          sí, Eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Cancelar
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con Exito</p>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Recuperar useState
        </button>
      </>
    );
  }
}

export { UseStateD };
