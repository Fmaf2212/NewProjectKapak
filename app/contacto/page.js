import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import './contacto.css'

import iconoCorreo from '../../public/img/Contacto/iconoCorreo.gif'
import iconoDireccion from '../../public/img/Contacto/iconoDireccion.png'
import Image from "next/image";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <BackgroundTopPage text={'CONTACTO'} img={'PortadaContacto.png'} />
      <section className="sectionMensajeSuperior">
        <p>Escríbenos un mensaje y nos estaremos comunicando contigo</p>
        <p>en brevedad.</p>
      </section>
      <main className="mainWhatsappAndFormulario">
        <section className="sectionBloqueIzquierdaWhatsApp">
          <div className="trabajemosJuntos">
            <p>Contacto<br/>¡Trabajemos juntos!</p>
          </div>
          <div className="enlaces">
            <a href="" className="enlaceWhatsApp">
              Contáctanos en vía WhatsApp + 00 000 000 000
            </a>
            <a href="" className="enlaceCorreo">
              <Image src={iconoCorreo} alt="iconoCorreo"/> xxxxxxx@xxxxx.com
            </a>
            <a href="" className="enlaceDireccion">
              <Image src={iconoDireccion} alt="iconoDireccion"/>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </a>
          </div>
        </section>
        <section className="sectionFormulario">
          <form action="">
            <h1>¿Quieres saber más?</h1>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Nombre<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Apellido<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Correo empresarial<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Telefono<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Empresa<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Número de empleados<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">¿En qué servicio estás interesado?<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">¿Cuál es tu presupuesto asignado?<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Comentarios<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
              </label>
            </div>
            <div className="divInputSubmit">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page