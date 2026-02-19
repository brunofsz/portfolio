import './Home.css'
import { motion, scale } from 'framer-motion'
import About from './About'
import Skills from './SkillsCarousel'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiDownload } from "react-icons/fi";
import Projects from './Projects';

const Home = () => {

    return (
        <div className='container'>
            <div className='welcome' >
                <motion.div className="text" initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} >
                    <h3>Hi, I'm</h3>
                    <h1>Bruno Souza</h1>
                    <h3>Web Developer</h3>
                    <div className='social'>
                        <a href="https://github.com/brunofsz" target="_blank"><SiGithub className='icon' /> GitHub</a>
                        <a href="https://www.linkedin.com/in/bruno-fsz/" target="_blank"><SiLinkedin className='icon' /> LinkedIn</a>
                        <a href="/CV_BrunoFSouza.pdf" target="_blank"><FiDownload className='icon' /> Download CV</a>
                    </div>
                </motion.div>
                <motion.div className="divImg" whileTap={{ scale: 0.8 }} initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <img src="/fotoBrunoFsz.jpeg" alt="Foto de Bruno Souza" />
                </motion.div>
            </div>

            <About />

            <Skills />

            <Projects />
        </div >
    )
}

export default Home