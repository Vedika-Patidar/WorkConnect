import React, { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("jobseeker");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { ...formData, role });
    alert(`Logged in as ${role}! Check console for form data.`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC] font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
        <h2 className="text-3xl font-semibold text-center text-[#0D1B2A] mb-8">
          Welcome Back 👋
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            className={`px-5 py-2.5 rounded-l-lg font-medium border transition-all duration-200 ${
              role === "jobseeker"
                ? "bg-[#1E6091] text-white border-[#1E6091]"
                : "bg-gray-100 text-[#2E2E2E] border-gray-300"
            }`}
            onClick={() => setRole("jobseeker")}
          >
            Job Seeker
          </button>
          <button
            type="button"
            className={`px-5 py-2.5 rounded-r-lg font-medium border transition-all duration-200 ${
              role === "employer"
                ? "bg-[#1E6091] text-white border-[#1E6091]"
                : "bg-gray-100 text-[#2E2E2E] border-gray-300"
            }`}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-[#2E2E2E] mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091] transition"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#2E2E2E] mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091] transition"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#184E77] text-white py-2.5 rounded-lg font-semibold hover:bg-[#1E6091] transition duration-200 shadow-md hover:shadow-lg"
          >
            Login as {role === "jobseeker" ? "Job Seeker" : "Employer"}
          </button>
        </form>

        <p className="text-center text-[#6B7280] text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-[#1E6091] font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
