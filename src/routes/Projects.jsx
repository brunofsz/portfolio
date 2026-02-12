import "./Projects.css";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiGithub
} from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa";

const featuredProjects = [
    {
        name: "NodeTS Kennel",
        description: "Backend system in Node.js with TypeScript for kennel management.",
        tech: [
            { name: "Node.js", color: "#68a063", icon: <SiNodedotjs /> },
            { name: "TypeScript", color: "#3178c6", icon: <SiTypescript /> }
        ],
        link: "https://github.com/brunofsz/nodets-canil",
        linkTest: "https://intense-escarpment-43407-a36a6ef909b7.herokuapp.com/"
    },
    {
        name: "Event Manage",
        description: "CRUD system for event management with full backend logic.",
        tech: [
            { name: "React", color: "#61dbfb", icon: <SiReact /> },
            { name: "Node.js", color: "#68a063", icon: <SiNodedotjs /> },
            { name: "MongoDB", color: "#4db33d", icon: <SiMongodb /> }
        ],
        link: "https://github.com/brunofsz/event-manage",
        linkTest: "https://event-manage-theta.vercel.app/"
    },
    {
        name: "Soft Bakery System",
        description: "Bakery management system with stock and sales control.",
        tech: [
            { name: "HTML", color: "#e34c26", icon: <SiHtml5 /> },
            { name: "CSS", color: "#264de4", icon: <SiCss3 /> },
            { name: "PHP", color: "#777bb4", icon: <SiPhp /> },
            { name: "MySQL", color: "#00758f", icon: <SiMysql /> }
        ],
        link: "https://github.com/brunofsz/TCC_SOFT_BAKERY"
    }
];

const otherProjects = [
    {
        name: "Advanced Todo List",
        tech: [
            { name: "JavaScript", color: "#f7df1e", icon: <SiJavascript /> },
            { name: "HTML", color: "#e34c26", icon: <SiHtml5 /> },
            { name: "CSS", color: "#264de4", icon: <SiCss3 /> }
        ],
        link: "https://github.com/brunofsz/Todo-List-Avancada",
        linkTest: "https://brunofsz.github.io/Todo-List-Avancada/"
    },
    {
        name: "Axios Blog",
        tech: [
            { name: "React", color: "#61dbfb", icon: <SiReact /> }
        ],
        link: "https://github.com/brunofsz/react-axios-blog",
        linkTest: "https://axios-blog-rust.vercel.app/"
    },
    {
        name: "Multistep Form",
        tech: [
            { name: "React", color: "#61dbfb", icon: <SiReact /> }
        ],
        link: "https://github.com/brunofsz/react-multistep-form"
    },
    {
        name: "Password Generator",
        tech: [
            { name: "JavaScript", color: "#f7df1e", icon: <SiJavascript /> },
            { name: "HTML", color: "#e34c26", icon: <SiHtml5 /> },
            { name: "CSS", color: "#264de4", icon: <SiCss3 /> }
        ],
        link: "https://github.com/brunofsz/gerador-senha",
        linkTest: "https://brunofsz.github.io/gerador-senha/"
    }
];

const Projects = () => {
    return (
        <motion.div className="projectsContainer" initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="projectsTitle">Projects</h1>

            <h2 className="sectionTitle">Featured Projects</h2>
            <motion.div className="featuredGrid" initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {featuredProjects.map((project, index) => (
                    <div className="projectCard featured" key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>

                        <div className="techList">
                            {project.tech.map((tech, i) => (
                                <span key={i} style={{ color: tech.color }}>
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div className="projectBtns">
                            {project.linkTest && (
                                <a
                                    href={project.linkTest}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projectBtn test"
                                >
                                    <FaPaperPlane />
                                    View
                                </a>
                            )}

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectBtn outline"
                            >
                                <SiGithub />
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>

            <h2 className="sectionTitle">Other Projects</h2>
            <motion.div className="otherGrid" initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {otherProjects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <h3>{project.name}</h3>

                        <div className="techList">
                            {project.tech.map((tech, i) => (
                                <span key={i} style={{ color: tech.color }}>
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div className="projectBtns">
                            {project.linkTest && (
                                <a
                                    href={project.linkTest}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projectBtn test"
                                >
                                    <FaPaperPlane />
                                    View
                                </a>
                            )}

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectBtn outline"
                            >
                                <SiGithub />
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
