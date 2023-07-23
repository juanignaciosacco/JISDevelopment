import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Contacto from './routes/Contacto';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
      </main>
      <Contacto />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
