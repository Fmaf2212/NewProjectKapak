import Image from "next/image";

import nuestraMision from '../../public/img/MisionImag.png'
import iconoMision from '../../public/img/IconoMision.png'
import valores from '../../public/img/Valores.png'
import iconoValores from '../../public/img/IconoValores.png'
import './quienesSomos.css'
import Footer from "../components/Footer/Footer";
import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

const quienesSomos = () => {
  return (
    <>
      {/* <Image src={QuienesSomosPortada}/> */}
      <BackgroundTopPage text={'¿QUIENES SOMOS?'} img={'QuienesSomosPortada.png'} />
      <div className="descQuienesSomos">
        <h4>Una empresa confiable y sostenible</h4>
        <p>
          Nos dedicamos a la producción de alimentos innovadores, cuyo procesos
          tecnológicos preservan y respetan a la naturaleza. Aplicando
          conocimientos ancestrales y apoyamos a las comunidades originarias con
          el fin de mejorar la calidad de vida de nuestros clientes. Trabajamos
          con responsabilidad social y estamos comprometidos con:
          <br />
          <br />
          Nos dedicamos a la producción de alimentos innovadores, cuyo procesos
          tecnológicos preservan y respetan a la naturaleza. Aplicando
          conocimientos ancestrales y apoyamos a las comunidades originarias con
          el fin de mejorar la calidad de vida de nuestros clientes.
          <br />
          Trabajamos con responsabilidad social y estamos comprometidos con:
          <br />
          <br />
          • Mejorar la cadena de valor sostenible y sustentable.
          <br />
          • Disminuir la huella de carbono para el 2030.
          <br />
          • Elaboración de productos inspirados en ingredientes ancestrales con
          propiedades funcionales para la salud.
          <br />
        </p>
      </div>
      <div className="blockMisionAndValores">
        <div className="blockMision">
          <Image src={nuestraMision} alt="nuestraMision" />
          <div className="blockInfoMision">
            <div>
              <p>
                <span className="spanNuestra">NUESTRA</span>
                <br />
                <span className="spanMision">MISIÓN</span>
              </p>
              <Image src={iconoMision} alt="iconoMision" />
            </div>
            <p>
              Ser una organización líder en el desarrollo y manufactura de
              productos, brindando procesos innovadores en la fabricación de
              súper alimentos que contribuyen a la salud, preservando nuestros
              recursos naturales e integrando las comunidades originarias para
              llevar al mundo nuestra cultura milenaria.
            </p>
          </div>
        </div>
        <div className="blockValores">
          <div className="blockInfoValores">
            <div>
              <p>
                <span className="spanNuestros">NUESTROS</span>
                <br />
                <span className="spanValores">VALORES</span>
              </p>
              <Image src={iconoValores} alt="iconoValores" />
            </div>
            <p>
              • Compromiso y ética profesional.<br />
              • Trabajo en equipo.<br />
              • Responsabilidad social.<br />
              • Excelencia.<br />
              • Eficiencia ecológica.<br />
              • Ética en la inversión y el comercio justo.
            </p>
          </div>
          <Image src={valores} alt="valores" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default quienesSomos