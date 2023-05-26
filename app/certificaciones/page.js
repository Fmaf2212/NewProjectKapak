import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import Fortooro from "../../public/img/Certificaciones/Fortooro.png";
import CertifCarbonNeutral from "../../public/img/Certificaciones/CertifCARBONNEUTRAL.png";
import CertifHACCP from "../../public/img/Certificaciones/CertifHACCP.png";
import CertifIENERGIARENOVABLE from "../../public/img/Certificaciones/CertifIENERGIARENOVABLE.png";
import CertifiITSE from "../../public/img/Certificaciones/CertifiITSE.png";
import CertifiPGH from "../../public/img/Certificaciones/CertifiPGH.png";
import Image from "next/image";

import './certificaciones.css'
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <BackgroundTopPage text={'CERTIFICACIONES'} img={'PortadaCertificacion.png'} />
      <section className="sectionConvenio">
        <Image src={Fortooro} alt="Fortooro" width={539} />
        <div className="sectionConvenioText">
          <h1>CONVENIO con la <span>PACHAMAMA</span></h1>
          <h4>Contribuyendo con los objetivos globales de forma sostenible.</h4>
          <p>
          Estamos implementando y ejecutando acciones orientadas a la conservación, rescate y uso sostenible de plantas medicinales en beneficio de la salud. Un trabajo conjunto con Instituto Peruano de Etnociencias, sumado al uso de tecnología de punta, nos permite ser parte del convenio Pachamama que contribuye al desarrollo integral de las comunidades de la Región de Puerto Bermúdez, Palcazú y otros ámbitos de influencia en alianza con empresas colaboradoras como ORRAN R&A SAC.
          </p>
        </div>
      </section>
      <section className="sectionImagesCertificaciones">
        <h3>CERTIFICACIONES</h3>
        <hr />
        <div className="imagesCertificaciones">
          <a href=""><Image src={CertifCarbonNeutral} alt="CertifCarbonNeutral" width={309}/></a>
          <a href=""><Image src={CertifHACCP} alt="CertifCarbonNeutral" width={309}/></a>
          <a href=""><Image src={CertifIENERGIARENOVABLE} alt="CertifCarbonNeutral" width={309}/></a>
          <a href=""><Image src={CertifiITSE} alt="CertifCarbonNeutral" width={309}/></a>
          <a href=""><Image src={CertifiPGH} alt="CertifCarbonNeutral" width={309}/></a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page