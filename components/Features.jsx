import React from 'react';
import Image from 'next/future/image';

const Features = () => {

  const openBrowser = url => {
    let win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <section id='servicios' className="mt-20 bg-bookmarkWhite py-20 lg:mt-60" >
      <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 className="text-center text-3xl text-bookmarkBlue">Servicios</h1>
        <p className="mt-4 text-center text-bookmarkGrey">
          Ofrecemos servicios de calidad con los mejores repuestos en las mejores marcas para tus electrodomésticos
        </p>
        <p className="mt-4 text-center text-bookmarkGrey">
          ¡No dudes en cotizar tu reparación!
        </p>
      </div>
      {/* Feature 1 */}
      <div data-aos="zoom-in" className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
            <Image
              width={536}
              height={346}
              src="/images/rep-lavadora.jpg"
              blurDataURL="/images/rep-lavadora.jpg"
              placeholder="blur"
              alt="Feature N°1"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmarkBlue">
              Reparación de lavadoras
            </h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Reparamos todo tipo de lavadoras en marcas:
            </p>
            <Image src="/images/whirlpool.svg" width={100} height={100} className="my-4"
              
            />
            <Image src="/images/mabe.svg" width={100} height={100} className="my-4"
              
              />
            <Image src="/images/lg.svg" width={100} height={100} className="my-4"
              
              />
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              más...
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
              onClick={() => openBrowser('https://api.whatsapp.com/send?phone=593969232391')}
            >
              Mas información
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
      {/* Feature 2 */}
      <div data-aos="zoom-in" className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row-reverse">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
            <Image
              width={536}
              height={346}
              src="/images/rep-refrigeradora.jpg"
              blurDataURL="/images/rep-refrigeradora.jpg"
              placeholder="blur"
              alt="Feature N°1"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmarkBlue">Reparación de regriferadora</h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Se realiza toda variedad de recarga de gas doméstica e industrial
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
              onClick={() => openBrowser('https://api.whatsapp.com/send?phone=593995646335')}
            >
              Mas Información
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -right-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-l-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
      {/** Feature 3 */}
      <div data-aos="zoom-in" className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
            <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
              <Image
                width={536}
                height={346}
                src="/images/rep-calefones.png"
                blurDataURL="/images/rep-calefones.png"
                placeholder="blur"
                alt="Feature N°1"
                className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
              />
            </div>

            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmarkBlue">Reparación de Calefones a gas</h1>
              <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
                Se arregla todo de calefones en marcas:
              </p>
              <Image src="/images/mabe.svg" width={100} height={100} className="my-4"
              
              />
              <Image src="/images/bosch.svg" width={100} height={100} className="my-4"
              
              />
              <Image src="/images/lg.svg" width={75} height={75} className="my-4"
              
              />
              <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
                Y mas...
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
                nClick={() => openBrowser('https://api.whatsapp.com/send?phone=593995646335')}
              >
                Mas información
              </button>
            </div>
          </div>
          <div
            className="            
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmarkPurple
            lg:block"
          ></div>
        </div>

      
        {/** features 4*/}
        <div data-aos="zoom-in" className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row-reverse">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
          <Image
              width={536}
              height={346}
              src="/images/rep-secadora.png"
              blurDataURL="/images/rep-secadora.png"
              placeholder="blur"
              alt="Secadora"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmarkBlue">Reparación de secadoras a gas</h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Reparamos todo tipo de secadoras a domésticas e industriales
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
              nClick={() => openBrowser('https://api.whatsapp.com/send?phone=593995646335')}
            >
              Mas información
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -right-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-l-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
    </section>
  );
};

export default Features;
