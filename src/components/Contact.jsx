import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        //import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        //import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_kx9o7jf',
        'template_3czgkt9',
        {
          from_name: form.name,
          to_name: "Augustine",
          from_email: form.email,
          to_email: "ntcong3112@gmail.com",
          message: form.message,
        },
       // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        '5R1WZW6qPqdZBB3G7'
      )
      .then(
        () => {
          setLoading(false);
          alert("Gotcha! Your message reached my brain, but I've decided to embrace my inner sloth and avoid responding (unless it involves some sizzling flirtation). Lazy mode activated!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Nahh, this shit doesn't work, better call my phone if you have any emergency!!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <a href="tel:+84859171756"><p className={styles.sectionSubText}>Phone: (+84) 859.1717.56</p></a>
        <ul className='list-none flex sm:flex-row gap-10 mt-10 '> {/* Remove the "hidden" class here */}
      {/* Add the Github icon */}
      <li className="text-[18px] cursor-pointer">
        <a href="https://github.com/ntcong3112">
          <FontAwesomeIcon icon={faGithub} className="text-secondary hover:text-purple-500" />
        </a>
      </li>

      {/* Add the LinkedIn icon */}
      <li className="text-[18px] cursor-pointer">
        <a href="https://www.linkedin.com/in/ntcong3112/">
          <FontAwesomeIcon icon={faLinkedin} className="text-secondary hover:text-blue-500" />
        </a>
      </li>

 
      {/* Add the WhatsApp icon */}
      <li className="text-[18px] cursor-pointer">
        <a href="https://t.me/ntcong3112">
          <FontAwesomeIcon icon={faTelegram} className="text-secondary hover:text-green-500" />
        </a>
      </li>

      <li className="text-[18px] cursor-pointer">
        <a href="https://fb.com/ntcongg">
          <FontAwesomeIcon icon={faFacebook} className="text-secondary hover:text-purple-500" />
        </a>
      </li>
      <li className="text-[18px] cursor-pointer">
        <a href="https://www.instagram.com/_augustine.ng">
          <FontAwesomeIcon icon={faInstagram} className="text-secondary hover:text-purple-500" />
        </a>
      </li>
    </ul>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
