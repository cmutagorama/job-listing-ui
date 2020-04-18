import React from "react";
import "./App.scss";

import Job from "./components/job";
import { availableJobs } from "./data/dataset";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          {availableJobs.map((job, index) => (
            <Job
              key={index}
              Company={job.company}
              Title={job.title}
              Location={job.location}
              DatePosted={job.datePosted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
