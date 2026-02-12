import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav>
            <div className="navHeader">
                <NavLink to="/" onClick={closeMenu}>{'< Bruno FSZ />'}</NavLink>

                <button
                    type="button"
                    className={`menuToggle ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                    aria-controls="navbar-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div id="navbar-menu" className={`btns ${isOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Projects</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
