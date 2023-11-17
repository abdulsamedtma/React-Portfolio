import MainImage from "../../assets/main-bg.jpg";

function About() {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div className="inline-block">
        <img src={MainImage} alt="main image" className="profile-Img"/>
      </div>
      <div className="lg:max-w-4xl about-text">
        <p className="mt-7 lg:text-3xl text-xl font-bold ">
        Hello World! I'm Abdul, 
          <br />
            a full-stack software engineer.
        </p>
        <p className="mt-7">
          I am an aspiring full- stack software engineer with expertise in web
          development, particularly in JavaScript and Python. With a decade of
          experience in global logistics and maritime operations, I possess
          strong leadership and teamwork skills. Beyond work, I enjoy activities
          like tennis, hiking, camping, and have a deep appreciation for
          classical music. My transition into software engineering is fueled by
          a commitment to innovation and creating impactful solutions
        </p>
        <p className="mt-7">
          <strong className="lg:text-xl">Education</strong>
          <br />
          With a bachelor's degree in Ports and Shipping Administration and a
          Full Stack Software Development certification from Washington
          University, I possess a diverse educational background that combines
          maritime logistics expertise with comprehensive skills in software
          development. This unique blend equips me with a robust foundation to
          navigate the intersection of maritime operations and cutting-edge
          technology, contributing to innovative solutions in both domains.
          <br />
        </p>
        <p className="mt-7">
          <strong className="lg:text-xl">Work Experience </strong>
          <br />
          Abdul is a highly experienced logistics professional adept at managing
          complex global logistics operations. With a strong background in
          supply chain management and software engineering, he is well-equipped
          to develop innovative solutions bridging the gap between logistics and
          technology.
        </p>
      </div>
    </section>
  );
}

export default About;
