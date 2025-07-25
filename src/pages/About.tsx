import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/rick.jpeg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Henrique Expedito</h1>
      <h2 className="profile-text">O criador desta incrível pokédex</h2>
      <h4 className="profile-text">Desenvolvedor Frontend e Web Designer</h4>
     <div className="profile-links">
        <a href="https://github.com/ManoRicck?tab=repositories&q=&type=&language=&sort=name"
        target="_blank" rel="noopener noreferrer"
        >
        <FaGithub/>
        </a>

        <a href="https://www.instagram.com/rick_2037/"
        target="_blank" rel="noopener noreferrer"
        >
        <FaInstagram/>
        </a>

        <a href="#"
        target="_blank" rel="noopener noreferrer"
        >
        <FaLinkedin/>
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
