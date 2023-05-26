import { useState } from 'react';

import FlechaDerecha from '../../public/img/NuestraEmpresa/FlechaDerecha.png';
import FlechaIzquierda from '../../public/img/NuestraEmpresa/FlechaIzquierda.png';
import Image from 'next/image';

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev-btn" onClick={prevSlide}>
        <Image src={FlechaIzquierda} alt="FlechaIzquierda" width={64}/>
      </button>
      <div
        className="slider-container"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images.map((i, index) => (
          <div className="slide" key={index}>
            <img src={i.image} alt={`Slide ${index}`} width={380}/>
            <p>
              {i.desc}
            </p>
          </div>
        ))}
      </div>
      
      <button className="next-btn" onClick={nextSlide}>
        <Image src={FlechaDerecha} alt="FlechaDerecha" width={64}/>
      </button>
    </div>
  );
};

export default Slider;
