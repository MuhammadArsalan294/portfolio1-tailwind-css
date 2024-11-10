import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";




export default function Header() {
    return (
  
      <div className="z-50 sticky top-0 bg-gray-400">
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Image"
              width={50}
              height={50}
            />

            <span className="ml-3 text-xl font-bold">Muhammad Arsalan</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-900">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-gray-900">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <a href="/cv/cv1.pdf" download>
            <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-white text-base mt-4 md:mt-0">
              Download CV
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
      </div>     
     
     
    );
  }