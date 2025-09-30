import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#2a2d33] text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-lg tracking-wide">
        JOB TRACKER
      </Link>

      <div className="flex gap-6 text-sm">
        <Link
          to="/"
          className={`transition ${
            location.pathname === "/"
              ? "text-blue-400 font-semibold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/add"
          className={`transition ${
            location.pathname === "/add"
              ? "text-blue-400 font-semibold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Add Job
        </Link>
      </div>
    </nav>
  );
}
