import React from "react";
import {Layout} from "../components";
import work from "../../work.json";

const Employment: React.FC<Record<string, unknown>> = () => (
  <Layout active="employment" title="Resume - Derrick Nguyen">
    <div className="flex flex-col w-11/12 lg:w-7/12 mx-auto">
      <h2 className="text-2xl underline">Employment</h2>
      <div className="divide-y-2">
        {work.employments.map((employment) => (
          <div
            key={employment.id}
            className="flex flex-col items-start mb-6 pt-4"
          >
            <a
              className="text-gray-900 hover:opacity-50 border-transparent hover:border-black border border-dashed focus:outline-none focus:shadow-outline"
              href={employment.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl">{employment.companyName}</h3>
            </a>
            <h4 className="text-lg">{employment.titles.join(" ⇽ ")}</h4>
            <h5>
              {employment.location} | {employment.startToEndDate}
            </h5>
            <ul className="list-disc mt-4 pl-5">
              {employment.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Employment;
