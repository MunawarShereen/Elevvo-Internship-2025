import { createContext, useState, useEffect, useContext } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const stored = localStorage.getItem("jobs");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now() }]);
  const editJob = (id, updatedJob) =>
    setJobs(jobs.map((j) => (j.id === id ? { ...updatedJob, id } : j)));
  const deleteJob = (id) => setJobs(jobs.filter((j) => j.id !== id));

  return (
    <JobContext.Provider value={{ jobs, addJob, editJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

// ✅ custom hook export
export const useJobs = () => {
  return useContext(JobContext);
};
