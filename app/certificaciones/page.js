import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import './certificaciones.css'
import Footer from "../components/Footer/Footer";
import SectionConvenio from "./SectionConvenio";
import SectionImagesCertifi from "./SectionImagesCertifi";

const page = () => {
  return (
    <>
      <BackgroundTopPage left={'-80px'} text={'CERTIFICACIONES'} img={'PortadaCertificacion.png'} />
      <SectionConvenio />
      <SectionImagesCertifi />
      <Footer />
    </>
  )
}

export default page