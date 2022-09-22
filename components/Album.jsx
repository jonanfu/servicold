import React from 'react';
import Image from 'next/image';

const Album = () => {
  return (
    <section data-aos="fade-left" className="bg-bookmarkWhite py-20" id='trabajo'>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Conocer nuestro trabajo</h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-1.jpg" width={600} height={800} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
 
            </div>


            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-2.jpg"  width={600} height={800} loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            </div>


            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-3.jpg"  width={600} height={800} loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            </div>

            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-4.jpg"  width={600} height={800} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            </div>


            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-5.jpg"  width={600} height={800} loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            </div>


            <div className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
              <Image src="/images/trabajo-6.jpg"  width={600} height={800} loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
