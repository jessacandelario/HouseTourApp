import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

// function for image
function Slide(props) {
    return (
        <div className={props.className}></div>
    )
}

function SlideImages() {
    //store images in array
    const image = [
        <Slide className="slide1" />,
        <Slide className="slide2" />,
        <Slide className="slide3" />,
        <Slide className="slide4" />
    ]

    return (
        <>
            <HeaderImageSlides image={image} />
        </>
    )
}

//image slider function
function HeaderImageSlides({ image }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    function PreviousSlide() {
        const isSlide1 = currentSlide === 0
        const newSlide = isSlide1 ? image.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide);
    }

    function NextSlide() {
        const isFinalSlide = currentSlide === image.length - 1
        const newSlide = isFinalSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide);
    }

    return (
        <div className='sliderContainer'>
            <div className='goLeft' onClick={PreviousSlide}>⇦</div>
            {image[currentSlide]}
            <div className='goRight' onClick={NextSlide}>⇨</div>
            <p>This 2-bedroom apartment with a modern interior is situated in a quiet and secluded neighborhood and accessible to shops.
                It has a modern, bright, and spacious design that is suitable for a small family.
            </p>
        </div>
    )
}

export default SlideImages;