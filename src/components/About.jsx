import React from 'react'
import { Tilt }  from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
        }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center
          flex-col"
        >
          <img
          src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold
          text-center">{title}</h3>
        </div> 
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introdução</p>
      <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]">
    Sou um entusiasta de tecnologia apaixonado por 
    desenvolvimento front-end. Atualmente, estou me
    aprofundando em JavaScript e React para criar
    interfaces de usuário dinâmicas e responsivas. 
    Apesar de estar no início da minha jornada 
    profissional, estou sempre em busca de aprender
    e explorar novas tecnologias. 
    Amo resolver problemas e transformar ideias em 
    realidade através do código. Meu objetivo é 
    continuar crescendo na área de desenvolvimento
    e contribuir para projetos inovadores.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index) => (
        <ServiceCard key={service.title} index=
        {index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")