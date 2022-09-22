import React, { useState, useEffect } from 'react';
import useMedia from '../Hooks/useMedia';
import Image from 'next/future/image';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileScreen = useMedia('(max-width: 640px)');

  useEffect(() => {
    if (!mobileScreen) {
      setMobileMenu(false);
    }
  }, [mobileScreen]);

  return (
    <header>
      <nav className="container mt-4 flex items-center justify-between py-4 sm:mt-12">
        <div className="py-1">
          <Image
            width={148}
            height={125}
            src="/images/logo.png"
            blurDataURL="/images/logo.png"
            placeholder="blur"
            alt="Bookmark Logo"
          />
            
        </div><p className='uppercase font-bold text-bookmarkBlue px-7 py-3'>
        !Dale vida a tus electrodomésticos¡
        </p>
        <ul className="hidden flex-1 items-center justify-end gap-12 text-xs uppercase text-bookmarkBlue md:flex">
          <li>
            <a className="p-2" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a className="p-2" href="#servicios">
              Servicios
            </a>
          </li>
          <li>
            <a className="p-2" href="#trabajo">
              Nuestro trabajo
            </a>
          </li>
          <li>
            <a className="p-2" href="#contacto">
              Contacto
            </a>
          </li>
          {/* <button
            type="button"
            className="rounded-md bg-bookmarkRed px-7 py-3 uppercase text-white"
          >
            Login
          </button> */}
        </ul>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${
            mobileMenu ? 'open' : ''
          } hamburger block focus:outline-none md:hidden`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        <ul
          className={`${
            mobileMenu
              ? 'absolute top-20 left-0 right-0 z-20 flex flex-col items-center justify-center gap-12 bg-white pb-2 text-xs uppercase text-bookmarkBlue transition duration-300'
              : 'absolute -top-96 left-0 right-0 z-20 flex flex-col items-center justify-center gap-12 bg-white pb-2 text-xs uppercase text-bookmarkBlue transition duration-300'
          }`}
        >
          <li>
            <a className="border-b border-gray-300 p-2" href="#features">
              Inicio
            </a>
          </li>
          <li>
            <a className="border-b border-gray-300 p-2" href="#pricing">
              Nosotros
            </a>
          </li>
          <li>
            <a className="border-b border-gray-300 p-2" href="#contact">
              Servicios
            </a>
          </li>
          <li>
            <a className="border-b border-gray-300 p-2" href="#contact">
              Contacto
            </a>
          </li>
          {/* <button
            type="button"
            className="rounded-md bg-bookmarkRed px-7 py-3 uppercase text-white"
          >
            Login
          </button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
