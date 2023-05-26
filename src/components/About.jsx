import React, { useState } from "react";
/*import { Tilt } from '/node_modules/.vite/deps/react-tilt.js?v=b80d44d8';*/
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";


const About = () => {
    const [word, setWord] = useState(`I'm a seasoned full-stack developer, passionate about creating remarkable digital experiences since 2019. From consulting to designing, developing, deploying, and maintaining web applications, I've honed my skills in crafting highly available, scalable, secure, and cost-effective system designs. With an adventurous spirit and a cheerful attitude, I'm constantly seeking innovative optimization solutions.`)
const changeWord = () => {
  if(word === "I'm just a code-slinging sorcerer hiding questionable code since 2019, conjuring tech wonders when the paycheck sparkles like a unicorn!") {setWord("I'm a seasoned full-stack developer, passionate about creating remarkable digital experiences since 2019. From consulting to designing, developing, deploying, and maintaining web applications, I've honed my skills in crafting highly available, scalable, secure, and cost-effective system designs. With an adventurous spirit and a cheerful attitude, I'm constantly seeking innovative optimization solutions.")} else {
    setWord("I'm just a code-slinging sorcerer hiding questionable code since 2019, conjuring tech wonders when the paycheck sparkles like a unicorn!")
  }
}

  return (
    <>
      <motion.div 

      style={{cursor: 'pointer'}}
      onClick={() => {changeWord()}}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       
      >
        {word}
        
      </motion.p>
      </motion.div>
     


      <motion.div>
              
    <button
      style={{
        marginTop: '20px',
        background: '#34D399',
        color: '#FFFFFF',
        borderRadius: '5px',
        padding: '8px 12px',
        border: 'none',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 50%, transparent 50%)',
        backgroundSize: '40px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Link to="/file/resume.pdf" target="_blank" download>My Resume</Link> 
    </button>
      </motion.div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
