
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function Projects() {
  return (
    <div id="projects">
      <section className="text-gray-600 bg-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 -mt-12 cursor-pointer">
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  src="/projects/facebook.jpg"
                  alt="Facebook Project"
                  width={500}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook
                  </h1>
                  <p className="leading-relaxed">
                    This project is for those who own a Facebook business.
                  </p>
                  <Link
                    target="_blank"
                    href="https://clone-facebook-brown.vercel.app/"
                  >
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  src="/projects/id-card.jpg"
                  alt="ID Card Project"
                  width={500}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ID Card
                  </h1>
                  <p className="leading-relaxed ">
                    This project is for those who own an ID card business.
                  </p>
                  <Link
                    target="_blank"
                    href="https://id-card-governor-house.vercel.app/"
                  >
                    <p className="leading-relaxed  text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  src="/projects/resume.jpg"
                  alt="Resume Project"
                  width={500}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed">
                    This project is for those who own a resume business.
                  </p>
                  <Link
                    target="_blank"
                    href="https://hackathon-milestones-sigma.vercel.app/"
                  >
                    <p className="leading-relaxed  text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
