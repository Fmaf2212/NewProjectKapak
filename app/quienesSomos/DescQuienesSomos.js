"use client"
import { motion } from "framer-motion";

const DescQuienesSomos = ({y}) => {

  return (
    <div className="descQuienesSomos fade_up">
      <br />
      <br />
      <br />
      <br />
      <motion.h4
        initial={{y:0, opacity: 0}}
        whileInView={{y: y, opacity: 1}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        {" "}
        Una empresa confiable y sostenible
      </motion.h4>
      <motion.p
        initial={{y:0, opacity: 0}}
        whileInView={{y: y, opacity: 1}}
        transition={{duration: 1}}
        viewport={{once: true}}>
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
      </motion.p>
    </div>
  );
}

export default DescQuienesSomos