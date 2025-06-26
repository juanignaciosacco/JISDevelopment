import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Contacto from './routes/Contacto';
import FlechaSubirWidget from './components/FlechaSubirWidget';
import { LanguageProvider } from "./context/LanguageContext";
import ChangeLanguage from './components/ChangeLanguage';

function App() {
  return (
    <div id='Inicio'>
    <LanguageProvider>
      <Navbar />
      <ChangeLanguage />
      <FlechaSubirWidget />
      <Home />
      <Contacto />
      <footer>
        <Footer />
      </footer>
    </LanguageProvider>
    </div>
  );
}

export default App;
