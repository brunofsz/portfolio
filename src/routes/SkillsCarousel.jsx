import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiC,
    SiPhp,
    SiGit,
    SiPostgresql,
    SiMongodb
} from "react-icons/si"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './SkillsCarousel.css';

const skills = [
    { name: 'HTML', proficiency: 95, color: '#e34c26', icon: <SiHtml5 /> },
    { name: 'CSS', proficiency: 95, color: '#264de4', icon: <SiCss3 /> },
    { name: 'JavaScript', proficiency: 85, color: '#f7df1e', icon: <SiJavascript /> },
    { name: 'TypeScript', proficiency: 65, color: '#3178c6', icon: <SiTypescript /> },
    { name: 'React', proficiency: 79, color: '#61dbfb', icon: <SiReact /> },
    { name: 'Node.js', proficiency: 75, color: '#68a063', icon: <SiNodedotjs /> },
    { name: 'Python', proficiency: 55, color: '#3776ab', icon: <SiPython /> },
    { name: 'Git', proficiency: 70, color: '#f05032', icon: <SiGit /> },
    { name: 'PostgreSQL', proficiency: 77, color: '#336791', icon: <SiPostgresql /> },
    { name: 'MongoDB', proficiency: 77, color: '#4db33d', icon: <SiMongodb /> },
    { name: 'PHP', proficiency: 30, color: '#777bb4', icon: <SiPhp /> },
    { name: 'C', proficiency: 30, color: '#a8b9cc', icon: <SiC /> },

];

const SkillsCarousel = () => {
    return (
        <motion.div className="skill" initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="">Technologies & Skills</h2>
            <motion.div className="carouselContainer" initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index}>

                            <motion.div className="skill-card" whileTap={{ scale: 0.8 }}>
                                <div className="skill-icon-placeholder" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>

                                <div className="proficiency-header">
                                    <span>Proficiency</span>
                                    <span>{skill.proficiency}%</span>
                                </div>

                                <div className="progress-bar-bg">
                                    <div
                                        className="progress-bar-fill"
                                        style={{
                                            width: `${skill.proficiency}%`,
                                            backgroundColor: skill.color
                                        }}
                                    ></div>
                                </div>
                            </motion.div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    );
};

export default SkillsCarousel;