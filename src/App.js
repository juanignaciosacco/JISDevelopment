import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Contacto from './routes/Contacto';
import FlechaSubirWidget from './components/FlechaSubirWidget';

function App() {
  return (
    <div id='Inicio'>
      <Navbar />
      <FlechaSubirWidget />
      <Home />
      <Contacto />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
