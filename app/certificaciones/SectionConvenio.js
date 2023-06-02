"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Fortooro from "../../public/img/Certificaciones/Fortooro.png";

const SectionConvenio = () => {
  return (
    <section className="sectionConvenio fade_up">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={Fortooro} alt="Fortooro" width={539} />
      </motion.div>
      <motion.div className="sectionConvenioText">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          CONVENIO con la <span>PACHAMAMA</span>
        </motion.h1>
        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contribuyendo con los objetivos globales de forma sostenible.
        </motion.h4>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Estamos implementando y ejecutando acciones orientadas a la
          conservación, rescate y uso sostenible de plantas medicinales en
          beneficio de la salud. Un trabajo conjunto con Instituto Peruano de
          Etnociencias, sumado al uso de tecnología de punta, nos permite ser
          parte del convenio Pachamama que contribuye al desarrollo integral de
          las comunidades de la Región de Puerto Bermúdez, Palcazú y otros
          ámbitos de influencia en alianza con empresas colaboradoras como ORRAN
          R&A SAC.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SectionConvenio;
