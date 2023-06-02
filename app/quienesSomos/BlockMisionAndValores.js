"use client"
import { motion } from "framer-motion";

import Image from "next/image";

import nuestraMision from '../../public/img/MisionImag.png'
import iconoMision from '../../public/img/IconoMision.png'
import valores from '../../public/img/Valores.png'
import iconoValores from '../../public/img/IconoValores.png'

const BlockMisionAndValores = () => {
  return (
    <div className="blockMisionAndValores">
      <div className="blockMision">
        <motion.div
          className="divImgNuestraMision"
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 1}}
          viewport={{once: true}}>
          <Image
            src={nuestraMision}
            alt="nuestraMision"
            className="imgNuestraMision fade_right"
          />
        </motion.div>
        <div
          className="blockInfoMision fade_center"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <p>
              <span className="spanNuestra">NUESTRA</span>
              <br />
              <span className="spanMision">MISIÓN</span>
            </p>
            <Image src={iconoMision} alt="iconoMision" />
          </motion.div>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            Ser una organización líder en el desarrollo y manufactura de
            productos, brindando procesos innovadores en la fabricación de súper
            alimentos que contribuyen a la salud, preservando nuestros recursos
            naturales e integrando las comunidades originarias para llevar al
            mundo nuestra cultura milenaria.
          </motion.p>
        </div>
      </div>
      <div className="blockValores">
        <motion.div
         className="blockInfoValores fade_center"
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{duration: 1}}
         viewport={{once: true}}
        >
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <p>
              <span className="spanNuestros">NUESTROS</span>
              <br />
              <span className="spanValores">VALORES</span>
            </p>
            <Image src={iconoValores} alt="iconoValores" />
          </motion.div>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            • Compromiso y ética profesional.
            <br />
            • Trabajo en equipo.
            <br />
            • Responsabilidad social.
            <br />
            • Excelencia.
            <br />
            • Eficiencia ecológica.
            <br />• Ética en la inversión y el comercio justo.
          </motion.p>
        </motion.div>
        <motion.div
          className="divImgValores"
          initial={{x:150, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 1}}
          viewport={{once: true}}>
          <Image src={valores} alt="valores" className="imgValores fade_left" />
        </motion.div>
      </div>
    </div>
  );
};

export default BlockMisionAndValores;
