import React from "react";

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>

        <p>Por Favor, escribe el Código de seguridad.</p>

        <input placeholder="Código de seguridad"/>
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
