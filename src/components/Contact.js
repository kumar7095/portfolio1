import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-teal-900">
      <h2 className="text-4xl font-bold text-orange-400">Contact Me</h2>
      <p className="text-gray-300 mt-4">
        Feel free to reach out via email or social media.
      </p>
      <div className="flex justify-center mt-6 space-x-6">
        <a
          href="https://www.linkedin.com/in/talari-kumar-swamy-464486200/"
          className="text-blue-400 text-3xl hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kumar7095"
          className="text-gray-400 text-3xl hover:text-gray-500"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:talarikumarswamy123@gmail.com"
          className="text-red-400 text-3xl hover:text-red-500"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
