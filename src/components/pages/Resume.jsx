import resumeFile from "../../assets/resume.pdf";  // Import the resume file (PDF) from the specified location.
import { Link } from "react-router-dom";  // Import the Link component from React Router.

function Resume() {
    return (
        <section className="flex flex-col justify-center">
            <p className="text-xl">
                Here is a copy of my resume<br />
                Click to download!
            </p>
            <h2 className="mt-5 max-w-">
                {/* Create a link to download the resume file */}
                <Link to={resumeFile} download="Resume(Abdul)-PDF" target="_blank" 
                    className="block py-3 px-2 border border-gold rounded-lg text-center text-gold hover:bg-gold hover-text-dark duration-500"
                >
                    Download file
                </Link>
            </h2>
        </section>
    )
}

export default Resume;
