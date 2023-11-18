import { Link } from "react-router-dom";
import project1 from "../../assets/project01.png";
import project2 from "../../assets/project02.png";
import project3 from "../../assets/project03.png";
import project4 from "../../assets/project04.png";
import project5 from "../../assets/project05.png";
import project6 from "../../assets/project06.png";

function Projects() {
  return (
    <section className="max-w-4xl">
      <h2 className="lg:text-3xl sm:text-2xl text-xl mt-12 mb-7">Projects</h2>
      <div className="projects-box">
        <ul className="flex flex-wrap">
          <li className="w-full ">
            <img
              className="w-full h-48"
              src={project1}
              alt="The main screen of Moive Ranker with a movie poster and a form to enter a guess"
            />
            <h3 className="mt-3 lg:text-lg font-bold">Moive Ranker</h3>
            <p className="mt-1 text-sm">
              app allows users to guess a movie's Rotten Tomatoes score and
              redirects them to an Info page with a YouTube trailer if they
              guess correctly. It also keeps track of users' scores in
              localStorage and displays them at the end of the game.
            </p>
            <div className="mt-4">
              <Link
                to="https://github.com/hansonnick25/movie-quiz/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
              >
                View the code
              </Link>
              <Link
                to="https://hansonnick25.github.io/movie-quiz/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
              >
                View the app
              </Link>
            </div>
          </li>
          <li className="w-full mt-8 sm:ml-5 sm:mt-0">
            <img
              className="w-full h-48"
              src={project2}
              alt="The main screen of Recipe Eats with delicious dessert photos"
            />
            <h3 className="mt-3 lg:text-lg font-bold">Note Taker App</h3>
            <p className="mt-1 text-sm">
              Note Taker is a user-focused note-taking app tailored to the
              requirements of small business owners, streamlining idea capture
              and task management. Its user-friendly interface and essential
              features make it a valuable tool for enhancing productivity in the
              fast-paced entrepreneurial world.
            </p>
            <div className="mt-4">
              <Link
                to="https://github.com/abdulsamedtma/note-taker-app"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
              >
                View the code
              </Link>
              <Link
                to="https://infinite-mountain-24670-2ef6ad90cbe3.herokuapp.com/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
              >
                View the app
              </Link>
            </div>
          </li>
          <li className="w-full mt-8">
            <img
              className="w-full h-48"
              src={project3}
              alt="The main screen of Weather dashboard with search area on the left"
            />
            <h3 className="mt-3 lg:text-lg font-bold">Tech Blog</h3>
            <p className="mt-1 text-sm">
              Tech Blog CMS is a user-friendly platform for tech enthusiasts and
              developers to share and discuss technical topics and stay informed
              about the latest advancements in the tech world.
            </p>
            <div className="mt-4">
              <Link
                to="https://github.com/abdulsamedtma/tech-blog"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
              >
                View the code
              </Link>
              <Link
                to="https://tech-blogpost-3a2bb1ffc243.herokuapp.com/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
              >
                View the app
              </Link>
            </div>
          </li>
          <li className="w-full mt-8 sm:ml-5">
            <img
              className="w-full h-48"
              src={project4}
              alt=" The main screen of Recipe Eats with delicious dessert photos"
            />
            <h3 className="mt-3 lg:text-lg font-bold">Recipe Eats</h3>
            <p className="mt-1 text-sm">
              Embark on a culinary adventure by exploring a variety of recipes,
              discovering new flavors, and putting your cooking skills to the
              test.
            </p>
            <div className="mt-4">
              <Link
                to="https://github.com/KDonnelly33/Recipe-review"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
              >
                View the code
              </Link>
              <Link
                to="https://protected-escarpment-11572-48e550723f6b.herokuapp.com/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
              >
                View the app
              </Link>
            </div>
          </li>
          <li className="w-full mt-8">
            <img
              className="w-full h-48"
              src={project5}
              alt="The main screen of Weather dashboard with search area on the left"
            />
            <h3 className="mt-3 lg:text-lg font-bold">Weather Dashboard</h3>
            <p className="mt-1 text-sm">
              Weather Dashboard is a user-friendly weather app that allows users
              to search for a city and view its current weather conditions and a
              5-day forecast. It also keeps track of users' search history and
              displays it in a list below the search bar
            </p>
            <div className="mt-4">
              <Link
                to="https://github.com/abdulsamedtma/weather-dashboard-challenge06"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
              >
                View the code
              </Link>
              <Link
                to="https://abdulsamedtma.github.io/weather-dashboard-challenge06/"
                className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
              >
                View the app
              </Link>
            </div>
            <div className="mt-8">
              <li className="w-full mt-8 sm:ml-5">
                <img
                  className="w-full h-48 mt-8"
                  src={project6}
                  alt="The main screen of Work Day Scheduler with time blocks for each hour of the day"
                />
                <h3 className="mt-3 lg:text-lg font-bold">
                  Work Day Scheduler
                </h3>
                <p className="mt-1 text-sm">
                  Enhance your time management with the Scheduler app, your
                  perfect workday companion. This will help you to organize your
                  day and manage your time more effectively.
                </p>
                <div className="mt-4">
                  <Link
                    to="https://github.com/abdulsamedtma/work-day-scheduler-challenge-05"
                    className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs"
                  >
                    View the code
                  </Link>
                  <Link
                    to="https://abdulsamedtma.github.io/work-day-scheduler-challenge-05/"
                    className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2"
                  >
                    View the app
                  </Link>
                </div>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
