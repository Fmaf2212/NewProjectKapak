"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import CertifCarbonNeutral from "../../public/img/Certificaciones/CertifCARBONNEUTRAL.png";
import CertifHACCP from "../../public/img/Certificaciones/CertifHACCP.png";
import CertifIENERGIARENOVABLE from "../../public/img/Certificaciones/CertifIENERGIARENOVABLE.png";
import CertifiITSE from "../../public/img/Certificaciones/CertifiITSE.png";
import CertifiPGH from "../../public/img/Certificaciones/CertifiPGH.png";

const SectionImagesCertifi = () => {
  return (
    <section className="sectionImagesCertificaciones">
      <h3>CERTIFICACIONES</h3>
      <hr />
      <div className="imagesCertificaciones">
        <motion.a href=""
        initial={{y:100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: .5}}
        viewport={{once: true}}
        >
          <Image
            src={CertifCarbonNeutral}
            alt="CertifCarbonNeutral"
            width={309}
          />
        </motion.a>
        <motion.a href=""
        initial={{y:200, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: .5}}
        viewport={{once: true}}>
          <Image src={CertifHACCP} alt="CertifCarbonNeutral" width={309} />
        </motion.a>
        <motion.a href=""
        initial={{y:300, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: .5}}
        viewport={{once: true}}>
          <Image
            src={CertifIENERGIARENOVABLE}
            alt="CertifCarbonNeutral"
            width={309}
          />
        </motion.a>
        <motion.a href=""
        initial={{y:400, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: .5}}
        viewport={{once: true}}>
          <Image src={CertifiITSE} alt="CertifCarbonNeutral" width={309} />
        </motion.a>
        <motion.a href=""
        initial={{y:500, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: .5}}
        viewport={{once: true}}>
          <Image src={CertifiPGH} alt="CertifCarbonNeutral" width={309} />
        </motion.a>
      </div>
    </section>
  );
};

export default SectionImagesCertifi;
