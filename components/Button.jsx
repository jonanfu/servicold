import React from "react";

import styles from './Button.module.css'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'

const Button = () => {
    return ( 
    <>
        <a href="https://wa.me/593995646335" 
            className="
                fixed
                z-50 
                bottom-10 
                right-8 
                bg-green-600 
                w-20 h-20 
                rounded-full 
                drop-shadow-lg 
                flex justify-center 
                items-center 
                text-white 
                text-4xl 
                hover:bg-green-700
                hover:drop-shadow-2xl 
                hover:animate-bounce 
                duration-300" 
            target="_blank"> 
            <FaWhatsapp />
        </a>
        <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" 
            className="
                fixed
                z-50 
                bottom-40 
                right-8 
                bg-yellow-400 
                w-20 
                h-20 
                rounded-full 
                drop-shadow-lg 
                flex justify-center 
                items-center 
                text-white 
                text-4xl 
                hover:bg-yellow-300
                hover:drop-shadow-2xl 
                hover:animate-bounce 
                duration-300" 
            target="_blank"> 
            <FaTelegram />
        </a>
      
    
    </>
    )
}

export default Button;
