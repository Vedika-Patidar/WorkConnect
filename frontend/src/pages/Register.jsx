import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("jobseeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    employerName: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", { ...formData, role });
    alert(`Registered as ${role}! Check console for form data.`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC] font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
        <h2 className="text-3xl font-semibold text-center text-[#0D1B2A] mb-8">
          Create Your Account
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
          {/* Job Seeker Fields */}
          {role === "jobseeker" && (
            <div>
              <label className="block text-[#2E2E2E] mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091] transition"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Employer Fields */}
          {role === "employer" && (
            <>
              <div>
                <label className="block text-[#2E2E2E] mb-1 text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter company name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091] transition"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-[#2E2E2E] mb-1 text-sm font-medium">
                  Employer Name
                </label>
                <input
                  type="text"
                  name="employerName"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091] transition"
                  value={formData.employerName}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Common Fields */}
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
            Register as {role === "jobseeker" ? "Job Seeker" : "Employer"}
          </button>
        </form>

        <p className="text-center text-[#6B7280] text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#1E6091] font-medium hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
