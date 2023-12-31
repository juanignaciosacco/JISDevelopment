import Logo from '../assets/Logo/LogoLetras.png';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src={Logo} alt='Imagen Logo JIS Development'/>
        </div>
        <div className="navbar-links">
          <a href="#Contacto">Contact</a>
          <a href="#sobreNosotros">Sobre nosotros</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;