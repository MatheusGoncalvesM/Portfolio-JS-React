import React from 'react'
import { Tilt }  from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introdução</p>
      <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}>

    </motion.p>
    </>
  )
}

export default About