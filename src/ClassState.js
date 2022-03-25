import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por Favor, escribe el Código de seguridad.</p>

        {this.state
          .error /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
          <p>Error: Código de seguridad incorrecto.</p>
        )}
        <input placeholder="Código de seguridad" />
        <button onClick={() => 
            this.setState( prevState => ({error : !prevState.error}))}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
