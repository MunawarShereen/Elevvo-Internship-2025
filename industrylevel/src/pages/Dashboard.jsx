import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const { jobs } = useJobs();
  const navigate = useNavigate();

  // ✅ State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Filter jobs based on search input
  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1a1c20] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold tracking-wide">JOB TRACKER</h1>
        <button
          onClick={() => navigate("/add")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
        >
          + ADD NEW JOB
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search or filter applications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#2a2d33] text-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <p className="text-gray-400 text-center">
          No job applications match your search.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/job/${job.id}`)}
              className="cursor-pointer bg-[#2a2d33] p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-lg font-semibold text-white">
                {job.company}
              </h2>
              <p className="text-gray-400">{job.title}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-400">{job.date}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.status === "Applied"
                      ? "bg-blue-600 text-white"
                      : job.status === "Interviewing"
                      ? "bg-yellow-500 text-black"
                      : job.status === "Offer"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
