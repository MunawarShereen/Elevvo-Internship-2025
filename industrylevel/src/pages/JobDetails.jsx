import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function JobDetails() {
  const { id } = useParams();
  const { jobs, deleteJob, editJob } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(job || {});

  if (!job)
    return (
      <div className="min-h-screen bg-[#1a1c20] text-gray-400 p-6">
        Job not found.
      </div>
    );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    editJob(Number(id), form);
    setEditing(false);
  };

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-[#1a1c20] text-white p-6 flex justify-center">
      <div className="w-full max-w-lg bg-[#2a2d33] p-6 rounded-lg shadow">
        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-md font-medium">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">{job.company}</h1>
            <p className="text-gray-300">{job.title}</p>
            <p className="text-sm text-gray-400">
              {job.status} • {job.date}
            </p>
            <p className="text-gray-300">{job.notes}</p>
          </div>
        )}

        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setEditing(!editing)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium"
          >
            {editing ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={() => {
              deleteJob(Number(id));
              navigate("/");
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
