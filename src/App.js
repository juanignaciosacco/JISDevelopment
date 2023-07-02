import './App.css';
import Navbar from './components/Navbar/Navbar';
import Portada from './components/Portada/Portada';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Portada />
      </div>
      <div className='prueba'>

      </div>
      <div id='prueba2'>
        <p>Hola</p>
      </div>
    </div>
  );
}

export default App;
