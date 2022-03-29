import { UseState } from './UseStateImperative.js';
import { ClassState } from './ClassState.js';
import './App.css';

function App() {
  return (
    <div className="App" >
      <UseState name="Use State"/>
      <ClassState name="Class State"/>
    </div>
  );
}

export default App;
