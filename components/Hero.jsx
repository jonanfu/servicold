import React from 'react';
import Image from 'next/future/image';

const Hero = () => {

  const openBrowser = url => {
    let win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <section className="relative" id="nosotros" data-aos="fade-right">
      <div className="container mt-14 flex flex-col-reverse items-center gap-12 lg:mt-28 lg:flex-row">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="mb-2 text-center text-3xl text-bookmarkBlue md:text-4xl lg:text-left lg:text-5xl">
            Reparación de en linea blanca
          </h2>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Tecnicos certificados y calificados en linea blanca
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Servicio 100% garantizado por nuestra buena calidad de trabajo con los mejores precios y resultados
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Trabajamos todo Quito y sus valles.
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Arreglamos todo tipo de electrodomesticos.
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Refrigeradoras
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Congeladores
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Calefones a gas
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Cocinas de Inducción
          </p>
          <p className="mb-1 text-center text-lg text-bookmarkGrey lg:text-left">
            Cocinas a gas
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
              onClick={() => openBrowser('https://api.whatsapp.com/send?phone=593969232391')}
            >
              Contactanos
            </button>

          </div>
        </div>

        <div className="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0">
          <Image
            width={579}
            height={386}
            priority={true}
            src="/images/nosotros.jpg"
            blurDataURL="/images/nosotros.jpg"
            placeholder="blur"
            alt="Hero Background"
            className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
          />
        </div>
      </div>
      <div
        className="          
          bg-bookmarkPurple
          lg:
          absolute
          top-32
          right-0
          -bottom-28
          hidden
          h-80
          w-2/4
          overflow-hidden
          rounded-l-full
          md:block
          lg:-right-36"
      ></div>
    </section>
  );
};

export default Hero;
