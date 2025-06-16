import { useState } from "react";
import "../css/Slideshow.css";
import ajiboye from "../assets/ajiboye.png";
import saad from "../assets/saad.png";
import bill from "../assets/bill.png";
import lamar from "../assets/lamar.png";
import nancy from "../assets/nancy.png";

export default function Slideshow() {
    const images = [
        nancy,
        saad,
        bill,
        lamar,
        ajiboye,
        // Add more photos
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slideshow">
            <div
                className="slide"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>
            <div className="controls">
                <button className="arrow-btn" onClick={prevSlide}>
                    ❮
                </button>
                <button className="arrow-btn" onClick={nextSlide}>
                    ❯
                </button>
            </div>
        </div>
    );
}
