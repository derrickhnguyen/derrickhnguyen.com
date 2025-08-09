import React from "react";
import {Layout} from "../components";
import work from "../../work.json";

const Education: React.FC<Record<string, unknown>> = () => (
  <Layout active="education" title="Education - Derrick Nguyen">
    <div className="flex flex-col w-11/12 lg:w-7/12 mx-auto">
      <h2 className="text-2xl underline">Education</h2>
      <div className="divide-y-2">
        {work.educations.map((education) => (
          <div
            key={education.id}
            className="flex flex-col items-start mb-6 pt-4"
          >
            <a
              className="text-gray-900 hover:opacity-50 border-transparent hover:border-black border border-dashed focus:outline-none focus:shadow-outline"
              href={education.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl">{education.schoolName}</h3>
            </a>
            <h4 className="text-lg">{education.degree}</h4>
            <h5>{education.startToEndDate}</h5>
            <div className="text-gray-700">
              {education.courses?.map((course, index) => (
                <span key={index}>
                  {course}
                  {index < education.courses.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Education;
