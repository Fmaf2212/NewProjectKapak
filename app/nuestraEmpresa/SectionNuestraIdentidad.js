"use client";
import { motion } from "framer-motion";

const SectionNuestraIdentidad = () => {
  return (
    <motion.section className="sectionNuestraIdentidad fade_up">
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Nuestra identidad
      </motion.h3>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        KAPAY HUAYTA se compromete con un nuevo sueño, inspirar y transformar un
        mundo sostenible, renovando nuestra identidad visual como expresión de
        ese compromiso. Cada ícono, inspirado en nuestros orígen y cultura
        milenaria, tiene un significado especial en su esencia, y representa
        nuestro esfuerzo por adoptar una vida sostenible y saludable.
      </motion.p>
    </motion.section>
  );
};

export default SectionNuestraIdentidad;
