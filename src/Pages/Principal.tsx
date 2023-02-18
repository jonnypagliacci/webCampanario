import React, { useState } from "react";
import { ArrowRight } from 'react-bootstrap-icons'
import { ArrowLeft } from 'react-bootstrap-icons'


export default function Principal() {
    
    const slides = [
        './imagenesCarrusel/logo.jpg',
        './imagenesCarrusel/jaelFb.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; 
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {

    };

    return (
        <div className='max-w-[1400px] h-[900px] w-full m-auto py-16 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            {/* Left Arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black2/20 text-white cursor-pointer">
                <ArrowLeft size={30} onClick = {prevSlide} />
            </div>
            {/* Right Arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black2/20 text-white cursor-pointer">
                <ArrowRight size={30} onClick = {nextSlide}/>
            </div>
        </div>
    )
}