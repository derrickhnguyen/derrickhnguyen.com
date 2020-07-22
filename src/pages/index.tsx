import React from "react";
import Link from "next/link";
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
            className="mr-4 hover:opacity-75 focus:outline-none focus:shadow-outline"
            target="_blank"
            href="https://www.linkedin.com/in/derrickhn/"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </a>
          <a
            className="mr-4 hover:opacity-75 focus:outline-none focus:shadow-outline"
            target="_blank"
            href="https://twitter.com/derrickhnguyen"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a>
          <a
            className="mr-4 hover:opacity-75 focus:outline-none focus:shadow-outline"
            href="https://www.instagram.com/derrickhnguyen/"
            target="_blank"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </a>
          <a
            className="hover:opacity-75 focus:outline-none focus:shadow-outline"
            href="https://res.cloudinary.com/derrickhnguyen/image/upload/v1595304443/derrickhnguyen/resume.pdf"
            target="_blank"
          >
            <FontAwesomeIcon size="lg" icon={faFilePdf} />
          </a>
        </div>
        <div className="flex flex-col w-full lg:w-2/4 p-6 lg:p-0 content-center items-center justify-center">
          <h1 className="text-3xl mb-3">Derrick Nguyen</h1>
          <div className="text-lg">
            <a
              className="underline hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/derrickhnguyen"
            >
              Software Engineer
            </a>{" "}
            |{" "}
            <Link href="/photos">
              <a className="underline hover:opacity-75" href="/photos">
                Film Photographer
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
