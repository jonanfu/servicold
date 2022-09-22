import React from 'react';
import Image from 'next/future/image';

const Payment = () => {
  return (
    <section data-aos="fade-right" id="pricing" className="mt-10 py-10">
      <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 className="text-center text-3xl text-bookmarkBlue">
          Formas de pago
        </h1>
        <p className="mt-4 text-center text-bookmarkGrey">
         Aceptamos todo tipo de pago:
        </p>
        <div className="flex flex-col items-center p-6 mx-auto">
            <Image
              width={1000}
              height={500}
              src="/images/forma-pago.png"
              blurDataURL="/logo-firefox.png"
              placeholder="blur"
              alt="Formas de pago"
            />
            <h3 className="mt-5 mb-2 text-lg text-bookmarkBlue">
              ¡No dudes en cotizar tu repación!
            </h3>

          </div>
          <hr className="border-b border-bookmarkWhite" />
      </div>

      <div className="container mt-16 grid max-w-screen-lg grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">

        <div className="flex flex-col rounded-md shadow-md lg:my-8">
          
        </div>

        
      </div>
    </section>
  );
};

export default Payment;
