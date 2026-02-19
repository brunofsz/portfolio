import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <p className="footerName">Bruno Souza © {new Date().getFullYear()}</p>

                <div className="footerLinks">
                    <a
                        href="https://github.com/brunofsz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bruno-fsz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:brunofrancisco.souza2@gmail.com">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
