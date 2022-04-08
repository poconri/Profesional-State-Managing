import React, { useReducer } from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer ({ name }){

  const intialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  };

  const reducerObject = (state, payload) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'WRITE': {
        ...state,
        value: payload,
        error: false,
        loading: false,
    },
    'DELETE': {
        ...state,
        deleted: true,
        value: '',
        error: false,
        loading: false,
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'RESET': {
        ...state,
        deleted: false,
        confirmed: false,
        value: '',
        error: false,
        loading: false,
    },
    default: {
        ...intialState,
    },
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

    const [state, dispatch] = React.useReducer(reducer, intialState);


/* estos dos son ejemplos nada mas*/

// const reducerif = (state, action) => {
//     if (action.type === 'ERROR') {
//         return {
//             ...state,
//             error: true,
//             loading: false,
//         };
//     } else if (action.type === 'CHECK') {
//         return {
//             ...state,
//             loading: true,
//         };
//     } else if (action.type === 'WRITE') {
//         return {
//             ...state,
//             value: action.value,
//             error: false,
//             loading: false,
//         };
//     } else if (action.type === 'DELETE') {
//         return {
//             ...state,
//             deleted: true,
//             value: '',
//             error: false,
//             loading: false,
//         };
//     } else if (action.type === 'CONFIRM') {
//         return {
//             ...state,
//             confirmed: true,
//             value: '',
//             error: false,
//             loading: false,
//         };
//     } else if (action.type === 'RESET') {
//         return {
//             ...state,
//             deleted: false,
//             confirmed: false,
//             value: '',
//             error: false,
//             loading: false,
//         };
//     } else {
//         return {
//             ...intialState,
//         };
//     }
// };

// const reducerSwitch = (state, action) => {
//     switch (action.type) {
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false,
//             };
//         case 'CHECK':
//             return {
//                 ...state,
//                 loading: true,
//             };
//         case 'WRITE':
//             return {
//                 ...state,
//                 value: action.value,
//                 error: false,
//                 loading: false,
//             };
//         case 'DELETE':
//             return {
//                 ...state,
//                 deleted: true,
//                 value: '',
//                 error: false,
//                 loading: false,
//             };
//         case 'CONFIRM':
//             return {
//                 ...state,
//                 confirmed: true,
//                 value: '',
//                 error: false,
//                 loading: false,
//             };
//         case 'RESET':
//             return {
//                 ...state,
//                 deleted: false,
//                 confirmed: false,
//                 value: '',
//                 error: false,
//                 loading: false,
//             };
//         default:
//             return {
//                 ...intialState,
//             };
//     }
// }

console.log(state);

React.useEffect(() => {
    console.log('Empezando el efecto');
    if (!!state.loading) {
      setTimeout(() => {
          console.log('Haciendo la validación')

        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' });
        }
      }, 3000);
    }
  }, [
    state.loading,
  ]);

  if (!state.deleted && !state.confirmed) {
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
          onChange={(event) => {
            dispatch({ type: 'WRITE', payload: event.target.value });
        }}
        />
        <button
          onClick={ () => {
              dispatch({ type: 'CHECK' });
          }}
        >
          Comprobar
        </button>
      </>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación ¿Desea Continuar?</p>
        <button
          onClick={() => {
            dispatch({ type: 'DELETE' });
          }}
        >
          sí, Eliminar
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' });
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
            dispatch({ type: 'RESET' });
          }}
        >
          Recuperar useReducer
        </button>
      </>
    );
  }
};

export { UseReducer };