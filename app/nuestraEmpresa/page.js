import BackgroundTopPage from "../components/BackgroundTopPage/BackgroundTopPage";

import Foto from "../../public/img/NuestraEmpresa/Foto.png";

import "./nuestraEmpresa.css";
import Image from "next/image";

import Slider from "./Slider";
import Footer from "../components/Footer/Footer";

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
      />
      <section className="sectionNuestraIdentidad">
        <h3>Nuestra identidad</h3>
        <p>
          KAPAY HUAYTA se compromete con un nuevo sueño, inspirar y transformar
          un mundo sostenible, renovando nuestra identidad visual como expresión
          de ese compromiso. Cada ícono, inspirado en nuestros orígen y cultura
          milenaria, tiene un significado especial en su esencia, y representa
          nuestro esfuerzo por adoptar una vida sostenible y saludable.
        </p>
      </section>
      <section className="sectionSlider">
        <Slider images={images} />
      </section>
      <section className="sectionObjetivosGlobales">
        <Image src={Foto} alt="Foto" width={458}/>
        <div>
          <h4>Contribuyendo con los objetivos globales de forma sostenible</h4>
          <p>
            Reconocemos la oportunidad que suponen los objetivos mundiales del
            desarrollo sostenible de la ONU y la implicación del sector privado
            para superar los principales desafíos a los que la sociedad se
            enfrenta.
            <br />
            <br />
            Contribuiremos al desarrollo de los ODS, reconociendo su importancia
            estratégica para neustro negocio y para el mundo, y estamos
            comprometidos a ayudar a lograrlos. En PAKAY HUAYTA asumimos este
            compromiso, adaptándolo al contexto en el que operamis. De este
            modo, desde el 2020 anuncíamos nuestra contribución específica a la
            agenda 2030.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
