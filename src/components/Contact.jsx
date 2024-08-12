import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "", 
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {  name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//template_5afsytf
//service_qxcy1un
//LkX4oPgT1Hc1UG-E7
    emailjs.send(
      "service_qxcy1un", 
      "template_5afsytf",
    {
        from_name: form.name,
        to_name: "Matheus",
        from_email: form.email,
        to_email: "matheusmachado2005@hotmail.com",
        message: form.message,
    },
    "LkX4oPgT1Hc1UG-E7"
    )
    .then(() => {
      setLoading(false);
      alert("Obrigado. Eu entrarei em contato assim que possível!");

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert("Aconteceu algo de errado.")
    })
  }

  return (
    <div className={`xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8
        rounded-2xl"
      >
        <p className={styles.sectionSubText}>Dá um toque!</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium
             mb-4 px-3">Seu Nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome?"
              className="bg-tertiary rounded-2xl py-3 px-6
              placeholder:text-secondary text-white outlined-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium
             mb-4 px-3">Seu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu email?"
              className="bg-tertiary rounded-2xl py-3 px-6
              placeholder:text-secondary text-white outlined-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium
             mb-4 px-3">Sua Mensagem</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Qual a sua mensagem?"
              className="bg-tertiary rounded-2xl py-3 px-6
              placeholder:text-secondary text-white outlined-none
              border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none
            w-fit text-white font-bold shadow-md shadow-primary
            rounded-xl"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")