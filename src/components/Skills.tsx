import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills">
      <section className="text-gray-600 bg-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* HTML */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">80%</p>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 rounded-xl w-[75%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">75%</p>
                </div>
              </div>
            </div>
            {/* JavaScript/TypeScript */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">70%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}