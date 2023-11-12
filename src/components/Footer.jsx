import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-5 bg-dark"> 
            <div className="text-center">
                <ul className="flex justify-center">
                    <li className="w-6">
                        <Link to="https://github.com/abdulsamedtma" target="_blank" rel="noreferrer">
                            <img src={github} alt="github logo" />
                        </Link>
                    </li>
                    <li className="w-6 ml-4">
                        <Link to="https://www.linkedin.com/in/abdul-samed-alhassan-3653a02a/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin logo" />
                        </Link>
                        <li className="w-6 ml-4">
                        <Link to="https://www.facebook.com/profile.php?id=100068968449406" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="Facebook logo" />
                        </Link>
                            
                    </li>
                    </li>
                </ul>

                <p className="mt-2.5 text-sm">Made App was with ❤️ by Abdul. ✨ Every day is a learning day! ✨</p>
            </div>
        </footer>
    );
}

export default Footer;
