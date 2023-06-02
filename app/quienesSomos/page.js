import './quienesSomos.css'

import Footer from "../components/Footer/Footer";
import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";
import DescQuienesSomos from "./DescQuienesSomos";
import BlockMisionAndValores from "./BlockMisionAndValores";

const quienesSomos = () => {

  return (
    <>
      {/* <Image src={QuienesSomosPortada}/> */}
      <BackgroundTopPage left={'-40px'} text={'¿QUIENES SOMOS?'} img={'QuienesSomosPortada.png'} />
      <DescQuienesSomos y="-2vw" />
      <BlockMisionAndValores />
      <Footer />
    </>
  );
}

export default quienesSomos