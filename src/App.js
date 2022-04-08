import { UseState } from './UseStateImperative.js';
import { ClassState } from './ClassState.js';
import './App.css';
import { UseStateD } from './useStateDeclarativy.js';

function App() {
  return (
    <div className="App" >
      <UseStateD name="Use State Declarativo"/>
      <UseState name="Use State Imperativo|"/>
      <ClassState name="Class State"/>
    </div>
  );
}

export default App;
