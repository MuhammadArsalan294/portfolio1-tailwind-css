import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/skills.css";  // Import custom CSS



export default function Skills() {
  return (
    <div id="skills">
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h1 className="skills-title">
              Skills
            </h1>
          </div>
<<<<<<< HEAD
          <div className="flex flex-wrap -m-4">
            {/*Skills*/}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
=======
          <div className="skills-grid">
            {/* HTML Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
                  </div>
                  <h2 className="skill-name">HTML</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress html-progress"></div>
                  </div>
                  <p className="skill-percentage">100%</p>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
=======
            {/* CSS Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
                  </div>
                  <h2 className="skill-name">CSS</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress css-progress"></div>
                  </div>
                  <p className="skill-percentage">90%</p>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
=======
            {/* JavaScript/TypeScript Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
                  </div>
                  <h2 className="skill-name">JavaScript/TypeScript</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress js-progress"></div>
                  </div>
                  <p className="skill-percentage">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

