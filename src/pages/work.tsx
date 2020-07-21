import React from "react";
import { Layout } from "../components";
import employmentHistory from "../../employmentHistory.json";

type EmploymentHistoryType = {
  id: string;
  companyName: string;
  title: string;
  location: string;
  startToEndDate: string;
  responsibilities: string[];
};

const Navigation = ({
  activeId,
  className = "",
  works,
  setActiveId,
}: {
  activeId: string;
  className?: string;
  works: EmploymentHistoryType[];
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <ul className={`list-disc text-lg ${className}`}>
    {works.map(({ id, companyName }) => (
      <li key={id}>
        <button
          className={`hover:opacity-75 cursor-pointer ${
            id === activeId ? "text-orange-400 underline" : ""
          }`}
          onClick={() => setActiveId(id)}
        >
          {companyName}
        </button>
      </li>
    ))}
  </ul>
);

const Content = ({
  className,
  activeId,
  works,
}: {
  className?: string;
  activeId: string;
  works: EmploymentHistoryType[];
}) => {
  const active = works.find(({ id }) => id === activeId);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">{active.companyName}</h1>
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
  );
};

const Work = () => {
  const works: EmploymentHistoryType[] = Object.values(employmentHistory);
  const [activeId, setActiveId] = React.useState<string>(works[0].id);

  return (
    <Layout title="Work - Derrick Nguyen">
      <div className="flex flex-col md:flex-row w-4/5 md:w-2/4 mx-auto">
        <Navigation
          activeId={activeId}
          className="w-full mb-6 md:mb-0 md:w-1/4 md:mr-3 pl-5"
          works={works}
          setActiveId={setActiveId}
        />
        <Content activeId={activeId} works={works} />
      </div>
    </Layout>
  );
};

export default Work;
