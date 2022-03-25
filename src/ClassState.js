import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

<<<<<<< HEAD
  //   UNSAFE_componentWillMount() {
  //     console.log("ComponentWillMount");
  //   }

  //   componentDidMount() {
  //     console.log("ComponentDidMount");
  //   }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la Validación");

        this.setState(() => this.setState({ loading: false }));

        console.log("Terminando la Validación");
      }, 3000);
    }
=======
//   UNSAFE_componentWillMount() {
//     console.log("ComponentWillMount");
//   }

//   componentDidMount() {
//     console.log("ComponentDidMount");
//   }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    if (!!this.state.loading) {
        setTimeout(() => {
          console.log("Haciendo la Validación");
  
            this.setState(() => this.setState({ loading: false }));
  
          console.log("Terminando la Validación");
        }, 3000);
      }
>>>>>>> master
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h2>Eliminar. {this.props.name}</h2>
=======
        <h2>Eliminar {this.props.name}</h2>
>>>>>>> master

        <p>Por Favor, escribe el Código de seguridad.</p>

        {this.state
          .error /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
          <p>Error: Código de seguridad incorrecto.</p>
        )}

<<<<<<< HEAD
        {this.state.loading && <Loading />}
        <input placeholder="Código de seguridad" />
        <button
          onClick={() => this.setState(() => this.setState({ loading: true }))}
=======
        {this.state.loading  && (
          <Loading />
        )}
        <input placeholder="Código de seguridad" />
        <button
          onClick={() =>
            this.setState(() => this.setState({ loading: true }))
          }
>>>>>>> master
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
