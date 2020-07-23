import React from "react";
import { Layout } from "../components";
import employmentHistory from "../../employmentHistory.json";

type EmploymentHistoryType = {
  id: string;
  companyName: string;
  url: string;
  title: string;
  location: string;
  startToEndDate: string;
  responsibilities: string[];
};

const Resume = () => {
  const works: EmploymentHistoryType[] = Object.values(employmentHistory);

  return (
    <Layout active="resume" title="Resume - Derrick Nguyen">
      <div className="flex flex-col w-11/12 lg:w-8/12 mx-auto divide-y-2">
        {works.map((active) => (
          <div className="flex flex-col items-start mb-6 pt-4">
            <a
              className="underline hover:opacity-50 border-transparent hover:border-black border-2 border-dashed focus:outline-none focus:shadow-outline"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-3xl">{active.companyName}</h1>
            </a>
            <h2 className="text-2xl">{active.title}</h2>
            <h3 className="text-lg">
              {active.location} | {active.startToEndDate}
            </h3>
            <ul className="list-disc mt-4 text-lg pl-5">
              {active.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Resume;
