// ChangeLanguage.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ChangeLanguage = () => {
  const { setLanguage, language } = useLanguage();

  return (
    //eslint-disable-next-line
    <div className='changeLanguage'>
      <a
        //eslint-disable-next-line
        href='#'
        onClick={(e) => {
          e.preventDefault();
          setLanguage('en');
        }}
        style={{ fontWeight: language === 'en' ? 'bold' : 'normal' }}
      >
        Eng
      </a>
      {" | "}
      <a
        // eslint-disable-next-line
        href='#'
        onClick={(e) => {
          e.preventDefault();
          setLanguage('es');
        }}
        style={{ fontWeight: language === 'es' ? 'bold' : 'normal' }}
      >
        Esp
      </a>
    </div>
  );
};

export default ChangeLanguage;
