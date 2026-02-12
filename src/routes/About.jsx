import "./About.css"
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaCode } from "react-icons/fa"
import { HiLightningBolt } from "react-icons/hi"
import { MdWorkOutline } from "react-icons/md"
import { FaLanguage } from "react-icons/fa"

const About = () => {
    return (
        <div className="about">

            <motion.div className="about-text" initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h2>About Me</h2>

                <p>
                    I'm a student of Systems Analysis and Development at Fatec,
                    focused on web development. I work mainly with JavaScript,
                    React and Node.js.
                </p>

                <p>
                    I'm constantly improving my skills and looking for my first
                    professional opportunity as a developer.
                </p>
            </motion.div>


            <motion.div className="about-card" initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="card-item">
                    <FaMapMarkerAlt className="card-icon" />
                    <span>Mogi Mirim - SP</span>
                </div>

                <div className="card-item">
                    <FaGraduationCap className="card-icon" />
                    <span>ADS - Fatec</span>
                </div>

                <div className="card-item">
                    <FaCode className="card-icon" />
                    <span>Web Developer</span>
                </div>

                <div className="card-item">
                    <HiLightningBolt className="card-icon" />
                    <span>React & Node.js</span>
                </div>

                <div className="card-item">
                    <MdWorkOutline className="card-icon" />
                    <span>Open to work</span>
                </div>

                <div className="card-item">
                    <FaLanguage className="card-icon" />
                    <span>English: Basic / Intermediate</span>
                </div>
            </motion.div>

        </div>
    )
}

export default About
