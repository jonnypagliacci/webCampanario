import React, { useState } from "react";
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'
import { ArrowRightCircleFill } from 'react-bootstrap-icons'


export default function CarruselPrincipal () {
    
    const slides = [
        './imagenesCarrusel/jaelFb.jpg',
        './imagenesCarrusel/logo.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; 
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-[2400px] h-[800px] w-auto m-auto py-0 px-0 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            {/* Left Arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black2/20 text-black cursor-pointer">
                <ArrowLeftCircleFill size={30} onClick = {prevSlide} />
            </div>
            {/* Right Arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black2/20 text-black cursor-pointer">
                <ArrowRightCircleFill size={30} onClick = {nextSlide}/>
            </div>
        </div>
    )
};