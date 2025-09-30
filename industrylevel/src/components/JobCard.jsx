export default function JobCard({ job }) {
  return (
    <div className="bg-[#2a2d33] rounded-lg p-4 shadow hover:shadow-lg transition duration-200 cursor-pointer">
      <h2 className="text-lg font-semibold text-white">{job.company}</h2>
      <p className="text-gray-300">{job.title}</p>

      <p
        className={`mt-3 inline-block px-3 py-1 text-sm rounded-md font-medium ${
          job.status === "Applied"
            ? "bg-blue-600 text-white"
            : job.status === "Interviewing"
            ? "bg-yellow-500 text-white"
            : job.status === "Offer"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }`}
      >
        {job.status}
      </p>

      <p className="mt-3 text-sm text-gray-400">Applied on: {job.date}</p>
    </div>
  );
}
