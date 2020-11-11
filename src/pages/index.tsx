import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components";
import work from "../../work.json";

const Home: React.FC<Record<string, unknown>> = () => (
  <Layout active="home" title="Home - Derrick Nguyen">
    <div className="flex flex-col justify-center content-center items-center">
      <img
        alt="Derrick Nguyen"
        className="rounded-full mx-3 mb-6 shadow-2xl"
        src="https://res.cloudinary.com/derrickhnguyen/image/upload/c_fill,h_650,r_max,w_650/v1604974106/derrickhnguyen/profile_picture_1.jpg"
      />
      <div className="flex mb-6">
        <a
          aria-label="Github"
          className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
          href="https://github.com/derrickhnguyen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a
          aria-label="Twitter"
          className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
          target="_blank"
          href="https://twitter.com/derrickhnguyen"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faTwitter} />
        </a>
        <a
          aria-label="LinkedIn"
          className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
          target="_blank"
          href="https://www.linkedin.com/in/derrickhn/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faLinkedin} />
        </a>
        <a
          aria-label="Email"
          className="hover:opacity-50 focus:outline-none focus:shadow-outline"
          href="mailto:derrickhnguyen@outlook.com"
        >
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </a>
      </div>
      <div className="flex flex-col text-center content-center items-center justify-center">
        <h1 className="font-bold font-logo text-4xl">Derrick Nguyen</h1>
        <div className="text-lg mb-6">
          Software Engineer | Film Photographer
        </div>
        <div>
          <h3 className="font-bold">
            Specialties <span className="text-xs">(not limited to)</span>
          </h3>
          {work.specialities.map(({ name, url }, index, array) => (
            <React.Fragment key={name}>
              <a
                className="text-sm text-gray-900 underline hover:opacity-50 border-transparent hover:border-black border border-dashed focus:outline-none focus:shadow-outline"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
              {`${index === array.length - 1 ? "" : ", "}`}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
