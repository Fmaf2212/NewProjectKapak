import React from 'react'

import quienesSomos from '../../../public/img/QuienesSomosBotonFooter.png'
import nuestroProductos from '../../../public/img/NuestrosProductosBotonFooter.png'
import nuestraEmpresa from '../../../public/img/NuestraEmpresaBotonFooter.png'
import certificaciones from '../../../public/img/CertificacionesBotonFooter.png'
import contactos from '../../../public/img/ContactosBotonFooter.png'
import logoPieDePagina from '../../../public/img/LogoEnPieDePagina.png'
import IconoWhatsapp from '../../../public/img/Iconowsp.png'
import IconoInstagram from '../../../public/img/IconoInstagram.png'
import IconoFacebook from '../../../public/img/IconoFace.png'

import Image from 'next/image'

import './footer.css'

const Footer = () => {
  return (
      <div className='blockFooter'>
        <div>
          <Image src={quienesSomos} alt="quienesSomos" width={289}/>
          <Image src={nuestroProductos} alt="nuestroProductos" width={289}/>
          <Image src={nuestraEmpresa} alt="nuestraEmpresa" width={289}/>
          <Image src={certificaciones} alt="certificaciones" width={289}/>
          <Image src={contactos} alt="contactos" width={289}/>
        </div>
        <div></div>
        <div>
          <Image src={logoPieDePagina} alt="logoPieDePagina" width={334}/>
        </div>
        <div className='blockSiguenosEn'>
          <span>SIGUENOS EN:</span>
          <div>
            <a href=""><Image src={IconoWhatsapp} alt="IconoWhatsapp" width={51}/></a>
            <a href=""><Image src={IconoInstagram} alt="IconoInstagram" width={51}/></a>
            <a href=""><Image src={IconoFacebook} alt="IconoFacebook" width={51}/></a>
          </div>
        </div>
      </div>
  )
}

export default Footer