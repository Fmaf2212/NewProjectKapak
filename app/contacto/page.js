import Image from "next/image";

import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";
import Footer from "../components/Footer/Footer";

import './contacto.css'

import iconoCorreo from '../../public/img/Contacto/iconoCorreo.gif'
import iconoDireccion from '../../public/img/Contacto/iconoDireccion.png'

const page = () => {
  return (
    <>
      <BackgroundTopPage left={'-50px'}  text={'CONTACTO'} img={'PortadaContacto.png'} />
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
              Contáctanos en vía WhatsApp +51 923 554 515
            </a>
            <a href="" className="enlaceCorreo">
              <Image src={iconoCorreo} alt="iconoCorreo"/> contacto@kapakhuayta.com.pe
            </a>
            <div className="ubicacion">
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src={iconoDireccion} alt="iconoDireccion"/>
                <p>Av. Pachacútec, Lima 15823</p>
              </div>
              <div style={{width: "600px", height: "500px", boxShadow: "rgba(0, 0, 0, 6.4) 0px 0px 15px 0px"}}><iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=es&amp;q=-12.211491495410115,%20-76.87465039630536+(Santa%20Natura%20Planta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>            </div>
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
                <span className="text-nomb">¿En qué servicio estás interesado?<span style={{color: "red", paddingLeft: "10px"}}>*</span></span>
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