import React from "react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container mx-auto text-center flex gap-5 justify-center items-center  text-white -mt-5">
        <a href="https://www.instagram.com/mathav._.07/">
          <div className="fa-instagram icons text-2xl hover:text-red-500 transition-all duration-300">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sethumathavan-g-a987bb190/">
          <div className="fa-linkedin icons text-2xl hover:text-red-500 transition-all duration-300">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/SETHUMATHAVAN77">
          <div className="fa-github icons text-2xl hover:text-red-500 transition-all duration-300">
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
