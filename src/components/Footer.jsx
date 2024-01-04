import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-2 bg-gray"> 
            <div className="text-center">
                <ul className="flex justify-center">
                    <li className="w-7">
                        <Link to="https://github.com/abdulsamedtma" target="_blank" rel="noreferrer">
                            <img src={github} alt="github logo" />
                        </Link>
                    </li>
                    <li className="w-7 ml-4">
                        <Link to="https://www.linkedin.com/in/abdul-samed-alhassan-3653a02a/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin logo" />
                        </Link>
                    </li>
                </ul>

                <p className="mt-2.5 text-sm">This App was with ❤️ by Abdul. ✨ Coding dreams into reality – I'm, your web wizard ✨</p>
            </div>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="e653d3b8-d8c7-4a3a-95d2-0222a93e9246" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </footer>
    );
}

export default Footer;
impo