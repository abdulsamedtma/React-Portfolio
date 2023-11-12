import MainImage from "../../assets/main-bg.jpg";

function About() {
    return (
        <section className="flex flex-col justify-center items-center text-center">
            <div className="inline-block">
                <img src={MainImage} alt="main image" />
            </div>
            <div className="lg:max-w-4xl about-text">
                <p className="mt-7 lg:text-3xl text-xl font-bold ">
                    Hello, I&#39;m Abdul n<br />
                    Web Developer
                </p>
                <p className="mt-7">
                With over a decade of experience as a seasoned logistics professional, Abdul has demonstrated expertise in global logistics management.<br />
                His extensive background in this field showcases his ability to orchestrate complex supply chain operations efficiently.<br />
                This hands-on experience, combined with his software engineering skills, uniquely positions Abdul to develop innovative solutions that bridge the gap between logistics and technology, ultimately optimizing global supply chain processes.
                </p>
                <p className="mt-7">
                With a strong commitment to making a meaningful impact through technology, I am an aspiring software engineer currently focused on mastering both front-end and back-end technologies, particularly excelling in web development with expertise in JavaScript, Python, and SQL. In addition to my technical endeavors, I bring a decade of professional experience in global logistics and maritime operations, reflecting my profound leadership and teamwork skills. Tennis, hiking, camping, and a deep appreciation for classical music are my off-screen passions. My enthusiasm for tackling new challenges is the driving force behind my continuous pursuit of mastery across various domains.
                </p>
                <p className="mt-7">
                    <strong className="lg:text-xl">Work Experience </strong><br />
                    During my professional journey as a logistics expert, I successfully managed intricate global logistics operations, overseeing the seamless movement of goods across international boundaries. My responsibilities included coordinating supply chain processes, ensuring the timely delivery of products, and implementing cost-effective strategies to enhance operational efficiency. This experience not only honed my organizational and problem-solving skills but also instilled in me a deep appreciation for the intersection of logistics and technology. As I transition into the realm of software engineering, I carry with me the invaluable insights gained from a decade in the logistics industry, which continue to inform my innovative approach to creating impactful technological solutions.
                </p>
            </div>
        </section>
    )
}

export default About;
