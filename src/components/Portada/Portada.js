import './Portada.css';
import LogoSoloImg from '../../assets/Logo/LogoSoloImagen.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Portada = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const imageHeight = document.getElementById('cover-image').offsetHeight;
  
        if (scrollY > imageHeight - viewportHeight / 2) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div id='portada'>
            <motion.div id="cover-image" initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: 'auto' }}>
                <div className='imagenLogoPortada'>
                    <img src={LogoSoloImg} />
                </div>
            <div className='flechaPortada'>
                <a href='#prueba2'><i><FontAwesomeIcon icon={faAngleDown} /></i></a>
            </div>
            </motion.div>
        </div>
    )
}

export default Portada;