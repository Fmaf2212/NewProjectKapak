import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import Colageno from '../../public/img/NuestroProductos/Colageno.png'
import Alcachofa from '../../public/img/NuestroProductos/Alcachofa.png'
import ColagenoPre from '../../public/img/NuestroProductos/ColagenoPre.png'
import ColagenoVe from '../../public/img/NuestroProductos/ColagenoVe.png'
import MieldeAbejas from '../../public/img/NuestroProductos/MieldeAbejas.png'
import Quina from '../../public/img/NuestroProductos/Quina.png'
import SuperSilueta from '../../public/img/NuestroProductos/SuperSilueta.png'
import Tocosh from '../../public/img/NuestroProductos/Tocosh.png'
import YoVitalNiños from '../../public/img/NuestroProductos/YoVitalNiños.png'

import Image from "next/image";

import './nuestrosProductos.css'
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
        <BackgroundTopPage text={'NUESTROS PRODUCTOS'} img={'PortadaNuestrosProductos.png'}/>
        <section className="sectionNuestrosProductos">
          <p>Nuestras marcas son tan diversas como los más de
20 países en los que comercializamos nuestros
productos.</p>
          <div className="sectionNuestrosProductos__img">
            <Image src={Colageno} alt="Colageno" width={381}/>
            <Image src={Alcachofa} alt="Alcachofa" width={381}/>
            <Image src={ColagenoPre} alt="ColagenoPre" width={381}/>
            <Image src={ColagenoVe} alt="ColagenoVe" width={381}/>
            <Image src={MieldeAbejas} alt="MieldeAbejas" width={381}/>
            <Image src={Quina} alt="Quina" width={381}/>
            <Image src={SuperSilueta} alt="SuperSilueta" width={381}/>
            <Image src={Tocosh} alt="Tocosh" width={381}/>
            <Image src={YoVitalNiños} alt="YoVitalNiños" width={381}/>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default page