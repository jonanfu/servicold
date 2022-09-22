import React from 'react';
import Image from 'next/future/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bookmarkBlue py-8">
      <div className="container flex flex-col items-center md:flex-row">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-12 md:justify-start">
          <Image
            width={148}
            height={25}
            src="/images/logo-sinfondo.png"
            blurDataURL="/images/logo-sinfondo.png"
            placeholder="blur"
            alt="Logo servicold"
          />
          <ul className="flex gap-12 text-xs uppercase text-white">
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
          </ul>
        </div>

        <div className="mt-12 flex gap-10 text-white md:mt-0">
          <a target="_blank" href="https://www.facebook.com/servicold" rel="noreferrer">
            <FaFacebook size={35} />
          </a>
          {/* <a target="_blank" href="https://www.linkedin.com" rel="noreferrer">
            <FaLinkedin size={35} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
