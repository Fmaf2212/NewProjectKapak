"use client"

import quienesSomos from '../../../public/img/Footer/iconoQuienesSomosFooter.png'
import nuestroProductos from '../../../public/img/Footer/iconoNuestrosProductosFooter.png'
import nuestraEmpresa from '../../../public/img/Footer/iconoNuestraEmpresaFooter.png'
import certificaciones from '../../../public/img/Footer/iconoCertificacionesFooter.png'
import contacto from '../../../public/img/Footer/iconoContactoFooter.png'
import logoPieDePagina from '../../../public/img/LogoEnPieDePagina.png'
import IconoWhatsapp from '../../../public/img/Iconowsp.png'
import IconoInstagram from '../../../public/img/IconoInstagram.png'
import IconoFacebook from '../../../public/img/IconoFace.png'

import Image from 'next/image'

import './footer.css'
// import { useLayoutEffect } from 'react'
import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'

const Footer = () => {
  // const searchParams = useSearchParams();
  // console.log(searchParams)
  // var pathname = window.location.pathname;

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     if(pathname === '/quienesSomos'){
  //       alert('HOLI');
  //     } else if(pathname === '/nuestraEmpresa'){
  //       document.getElementById("imgFooterNuestraEmpresa").style.transform = "translateY(-88px)"
  //     } else if(pathname === '/contacto'){
  //       document.getElementById("imgFooterContacto").style.transform = "translateY(-88px)"
  //     } else if(pathname === '/certificaciones'){
  //       document.getElementById("imgFooterCertificaciones").style.transform = "translateY(-88px)"
  //     } else if(pathname === '/nuestrosProductos'){
  //       document.getElementById("imgFooterNuestrosProductos").style.transform = "translateY(-88px)"
  //     }
  //   }, "1000");
  // }, [])

  return (
    <div className="blockFooter">
      {/* <div>
        <Link href="/quienesSomos">
          <Image
            id="imgFooterQuienesSomos"
            src={quienesSomos}
            alt="quienesSomos"
            width={289}
          />
        </Link>
        <Link href="/nuestrosProductos">
          <Image
            id="imgFooterNuestrosProductos"
            src={nuestroProductos}
            alt="nuestroProductos"
            width={289}
          />
        </Link>
        <Link href="/nuestraEmpresa">
          <Image
            id="imgFooterNuestraEmpresa"
            src={nuestraEmpresa}
            alt="nuestraEmpresa"
            width={289}
          />
        </Link>
        <Link href="/certificaciones">
          <Image
            id="imgFooterCertificaciones"
            src={certificaciones}
            alt="certificaciones"
            width={289}
          />
        </Link>
        <Link href="/contacto">
          <Image
            id="imgFooterContacto"
            src={contactos}
            alt="contactos"
            width={289}
          />
        </Link>
      </div> */}
      <div></div>
      <div>
        <Image src={logoPieDePagina} alt="logoPieDePagina" width={334} />
      </div>
      <div className="blockSiguenosEn">
        <span>SIGUENOS EN:</span>
        <div>
          <a href="">
            <Image src={IconoWhatsapp} alt="IconoWhatsapp" width={51} />
          </a>
          <a href="">
            <Image src={IconoInstagram} alt="IconoInstagram" width={51} />
          </a>
          <a href="">
            <Image src={IconoFacebook} alt="IconoFacebook" width={51} />
          </a>
        </div>
      </div>
      <div className="barraNavegaciónInferior">
        <Link href="/quienesSomos">
          <div>
            <Image
              id="imgFooterQuienesSomos"
              src={quienesSomos}
              alt="quienesSomos"
              height={103}
            />
            <p>
              ¿QUIENES SOMOS?
            </p>
          </div>
        </Link>
        <Link href="/nuestrosProductos">
          <div>
            <Image
              id="imgFooterNuestrosProductos"
              src={nuestroProductos}
              alt="nuestroProductos"
              height={103}
            />
            <p>
              NUESTROS PRODUCTOS
            </p>
          </div>
        </Link>
        <Link href="/nuestraEmpresa">
          <div>
            <Image
              id="imgFooterNuestraEmpresa"
              src={nuestraEmpresa}
              alt="nuestraEmpresa"
              height={103}
            />
            <p>
              NUESTRA EMPRESA
            </p>
          </div>
        </Link>
        <Link href="/certificaciones">
          <div>
            <Image
              id="imgFooterCertificaciones"
              src={certificaciones}
              alt="certificaciones"
              height={103}
            />
            <p>
              CERTIFICACIONES
            </p>
          </div>
        </Link>
        <Link href="/contacto">
          <div>
            <Image
              id="imgFooterContacto"
              src={contacto}
              alt="contactos"
              height={103}
            />
            <p>
              CONTACTO
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer