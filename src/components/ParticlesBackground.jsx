import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function ParticlesBackground() {
    return (
        <div className="particlesContainer">
            {particles.map((_, i) => {
                const size = Math.random() * 6 + 4;
                const left = Math.random() * 100;
                const duration = Math.random() * 10 + 10;


                return (
                    <motion.span
                        key={i}
                        className="particle"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                        }}
                        animate={{
                            y: ["0%", "-100vh"],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                );
            })}
        </div>
    );
}
