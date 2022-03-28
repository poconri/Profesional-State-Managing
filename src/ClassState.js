import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      error: false,
      loading: false,
    };
  }

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
  
            if(SECURITY_CODE === this.state.value) {
              this.setState({ loading: false, error: false });
            } else {
              this.setState({ loading: false, error: true });
            }
  
          console.log("Terminando la Validación");
        }, 3000);
      }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por Favor, escribe el Código de seguridad.</p>

        {(this.state.error && !this.state.loading) /* esta cosita hermosa me va servir para mostrar un mensaje de error */ && (
          <p>Error: Código de seguridad incorrecto.</p>
        )}

        {this.state.loading  && (
          <Loading />
        )}
        <input
        placeholder="Código de seguridad"
        value={this.state.value}
        onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button
          onClick={() =>
            this.setState(() => this.setState({ loading: true }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
