"use client";

import { useEffect, useState } from 'react'

import IconoBackToTop from '../../public/img/IconoBackToTop.png'
import Image from 'next/image';

const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setBackToTopButton(true)
        }else{
          setBackToTopButton(false)
        }
      })
    }, [])

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

  return (
    <div>
      {
        backToTopButton && (
          <Image src={IconoBackToTop} width={58} alt='IconoBackToTop' onClick={scrollUp} style={{position: "fixed", bottom: "50px", right: "50px", cursor: "pointer"}}/>
        )
      }
    </div>
  )
}

export default BackToTop