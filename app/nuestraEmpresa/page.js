import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import "./nuestraEmpresa.css";

import Slider from "./Slider";
import Footer from "../components/Footer/Footer";
import SectionNuestraIdentidad from "./SectionNuestraIdentidad";
import SectionObjetivosGlobales from "./SectionObjetivosGlobales";

const page = () => {
  const images = [
    {
      image: "img/NuestraEmpresa/Logo.png",
      desc: "KAPAY HUAYTA se compromete con un nuevo sueño, inspirar y transformar un mundo sostenible, renovando nuestra identidad visual como expresión de ese compromiso.",
    },
    {
      image: "img/IconoValores.png",
      desc: "Cada ícono, inspirado en nuestros orígen y cultura milenaria, tiene un significado especial en su esencia, y representa nuestro esfuerzo por adoptar una vida sostenible y saludable",
    },
  ];

  return (
    <>
      <BackgroundTopPage
        text={"NUESTRA EMPRESA"}
        img={"PortadaNuestraEmpresa.png"}
        left={'-40px'} 
      />
      <SectionNuestraIdentidad />
      <section className="sectionSlider">
        <Slider images={images} />
      </section>
      <SectionObjetivosGlobales />
      <Footer />
    </>
  );
};

export default page;
