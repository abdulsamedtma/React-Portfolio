import { Link, useLocation } from "react-router-dom";
import hamburgerIcon from "../assets/hamburger.png";
import { useState } from "react";

function Navbar() {
    // Get the current page location
    const currentPage = useLocation().pathname;
    
    // State to control the visibility of the mobile menu
    const [hamburger, setHamburger] = useState(false);

    // Function to toggle the mobile menu
    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <>
            <div className={`${hamburger ? "menu-active" : "hidden"} sm:block`}>
                <ul className="flex flex-col sm:flex-row nav nav-bars">
                    {/* Navigation links for different pages */}
                    <li className="ml-10">
                        <Link to="/" className={currentPage === "/" ? "text-gold" : "hover:text-gold duration-500"} onClick={() => setHamburger(false)}>
                            ABOUT
                        </Link>
                    </li>
                    <li className="ml-10">
                        <Link to="/projects" className={currentPage === "/projects" ? "text-gold" : "hover:text-gold duration-500"} onClick={() => setHamburger(false)}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className="ml-10">
                        <Link to="/contact" className={currentPage === "/contact" ? "text-gold" : "hover:text-gold duration-500"} onClick={() => setHamburger(false)}>
                            CONTACT
                        </Link>
                    </li>
                    <li className="ml-10">
                        <Link to="/resume" className={currentPage === "/resume" ? "text-gold" : "hover:text-gold duration-500"} onClick={() => setHamburger(false)}>
                            RESUME
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile menu button */}
            <button className="hamburger sm:hidden w-7" type="button" onClick={toggleHamburger}>
                <img src={hamburgerIcon} alt="hamburger menu" />
            </button>
        </>
    );
}

export default Navbar;
