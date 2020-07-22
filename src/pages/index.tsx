import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Layout } from "../components";
import specialties from "../../specialties.json";

export default function Home() {
  return (
    <Layout active="home" title="Home - Derrick Nguyen">
      <div className="flex flex-col justify-center content-center items-center">
        <img
          className="mx-3 mb-6 shadow-xl"
          src="https://res.cloudinary.com/derrickhnguyen/image/upload/c_scale,w_500/v1595200719/derrickhnguyen/profile-picture.jpg"
        />
        <div className="flex mb-6">
          <a
            className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
            href="https://github.com/derrickhnguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
          <a
            className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
            target="_blank"
            href="https://twitter.com/derrickhnguyen"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a>
          <a
            className="mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline"
            target="_blank"
            href="https://www.linkedin.com/in/derrickhn/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </a>
          <a
            className="hover:opacity-50 focus:outline-none focus:shadow-outline"
            href="https://www.instagram.com/derrickhnguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </a>
        </div>
        <div className="flex flex-col w-full lg:w-2/4 content-center items-center justify-center">
          <h1 className="text-3xl">derrick nguyen</h1>
          <div className="text-lg mb-6">
            software engineer | film photographer
          </div>
          <div className="text-center">
            <h3 className="font-bold">
              Specialties <span className="text-xs">(not limited to)</span>
            </h3>
            {Object.values(specialties).map(({ name, url }, index, array) => (
              <React.Fragment key={name}>
                <a
                  className="text-sm underline hover:opacity-50 border-transparent hover:border-black border-2 border-dashed focus:outline-none focus:shadow-outline"
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
}
