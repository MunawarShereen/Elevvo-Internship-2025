import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import Navbar from "../components/Navbar";

export default function AddJob() {

  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    navigate("/");
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#1a1c20] text-white p-6 flex justify-center">
      <div className="w-full max-w-lg bg-[#2a2d33] p-6 rounded-lg shadow">
        <h1 className="text-xl font-semibold mb-6">Add New Job</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={form.title}
            onChange={handleChange}
            required
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
            required
            className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full bg-[#1f2125] text-gray-200 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md font-medium"
          >
            Save Job
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
