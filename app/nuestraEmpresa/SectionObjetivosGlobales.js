"use client"
import { motion } from "framer-motion";

import Image from "next/image";
import Foto from "../../public/img/NuestraEmpresa/Foto.png";

const SectionObjetivosGlobales = () => {
  return (
    <motion.section
     className="sectionObjetivosGlobales fade_up"
     initial={{y:100, opacity: 0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{duration: 1}}
     viewport={{once: true}}
     >
      <Image src={Foto} alt="Foto" width={458} />
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
          compromiso, adaptándolo al contexto en el que operamis. De este modo,
          desde el 2020 anuncíamos nuestra contribución específica a la agenda
          2030.
        </p>
      </div>
    </motion.section>
  );
};

export default SectionObjetivosGlobales;
