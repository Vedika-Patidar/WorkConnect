// src/pages/Home.jsx
import React from "react";
import HomeImage from "../assets/register-side.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F4F8FB] min-h-screen text-[#1C1C1C] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-4 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-[#0A192F]">WorkConnect</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 bg-[#0078FF] text-white rounded-full hover:bg-[#005FCC] transition"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 border-2 border-[#0078FF] text-[#0078FF] rounded-full hover:bg-[#0078FF] hover:text-white transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        {/* Left Text Content */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-5xl font-bold text-[#0A192F] leading-tight">
            Empowering Your{" "}
            <span className="text-[#1E90FF]">Career Journey</span>
          </h1>
          <p className="text-lg text-gray-700">
            WorkConnect bridges the gap between skilled professionals and top
            companies. Discover opportunities that align with your goals,
            connect with employers, and take the next step in your career.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-[#0078FF] text-white rounded-full font-semibold hover:bg-[#005FCC] transition"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={HomeImage}
            alt="WorkConnect"
            className="w-[500px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0A192F] text-white py-16 px-8 md:px-16 rounded-t-3xl mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose WorkConnect?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Verified Companies",
              desc: "Connect only with trusted employers offering genuine opportunities.",
              img: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
            },
            {
              title: "Personalized Matches",
              desc: "Get job recommendations that perfectly fit your skills and interests.",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              title: "Simple & Fast",
              desc: "Apply for jobs effortlessly with our user-friendly interface.",
              img: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#1E90FF]/10 p-6 rounded-2xl border border-[#1E90FF]/30 hover:bg-[#1E90FF]/20 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-white text-center py-6 text-sm">
        © {new Date().getFullYear()} WorkConnect — Building Careers, Connecting
        Talent.
      </footer>
    </div>
  );
};

export default Home;
