import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold text-blue-400">
        Hi, I'm Talari Kumar Swamy
      </h1>
      <p className="text-lg text-gray-400 mt-3">
        Full Stack Developer | React Expert
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
