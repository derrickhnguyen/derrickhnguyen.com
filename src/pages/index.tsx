import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components";

export default function Home() {
  return (
    <Layout title="Home - Derrick Nguyen">
      <div className="flex flex-col justify-center content-center items-center">
        <img
          className="mx-3 mb-6 shadow-xl"
          src="https://res.cloudinary.com/derrickhnguyen/image/upload/c_scale,w_500/v1595200719/derrickhnguyen/profile-picture.jpg"
        />
        <div className="flex mb-3">
          <a
            className="mr-4 hover:opacity-75"
            target="_blank"
            href="https://www.linkedin.com/in/derrickhn/"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </a>
          <a
            className="mr-4 hover:opacity-75"
            target="_blank"
            href="https://twitter.com/derrickhnguyen"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a>
          <a
            className="mr-4 hover:opacity-75"
            href="https://www.instagram.com/derrickhnguyen/"
            target="_blank"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </a>
          <a
            className="hover:opacity-75"
            href="https://res.cloudinary.com/derrickhnguyen/image/upload/v1595304443/derrickhnguyen/resume.pdf"
            target="_blank"
          >
            <FontAwesomeIcon size="lg" icon={faFilePdf} />
          </a>
        </div>
        <div className="w-full md:w-2/4 p-6 md:p-0">
          <h1 className="text-3xl mb-3">Hi, I'm Derrick!</h1>
          <p className="text-lg">
            I'm a software engineer with an emphasis in front-end development.
            Born in 1996, I discovered my passion for web development at the age
            of 16 when I purchased my{" "}
            <a
              className="underline hover:no-underline border-2 border-transparent hover:border-2 hover:border-dashed hover:border-white"
              href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189"
              target="_blank"
              rel="noopener noreferrer"
            >
              first book
            </a>{" "}
            on how to create websites with HTML and CSS, the rest was history. I
            have approximately two years of industry experience and a lifetime
            passion to improve people's productivity. I'm obsess with learning,
            embraces new challenges, and values thoroughness and efficiency.
          </p>
        </div>
      </div>
    </Layout>
  );
}
