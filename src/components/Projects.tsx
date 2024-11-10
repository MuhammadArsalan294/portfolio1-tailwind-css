import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Projects() {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font bg-image">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  src="/projects/facebook.jpg"
                  alt="Facebook"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={500} // Set the width
                  height={300} // Set the height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I&apos;ve created for those who own a
                    Facebook business.
                  </p>
                  <Link href={"https://clone-facebook-brown.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  src="/projects/id-card.jpg"
                  alt="ID Card"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={500} // Set the width
                  height={300} // Set the height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ID Card
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I&apos;ve created for those who own an ID card business.
                  </p>
                  <Link href={"https://id-card-governor-house.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Resume"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/projects/resume.jpg"
                  width={500} // Set the width
                  height={300} // Set the height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I&apos;ve created for those who own a resume business.
                  </p>
                  <Link href={"https://hackathon-milestones-sigma.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project..
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