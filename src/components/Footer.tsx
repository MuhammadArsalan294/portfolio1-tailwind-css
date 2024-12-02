import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
  
      <div className="bg-gray-400 bg-pic">
         <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Image"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">Developer</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-1-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 MA —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=100077733514114"}
              className="ml-3 text-blue-800"
            >
              <FaFacebookF className="text-3xl hover:text-blue-900" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.instagram.com/muhammadarslan012/"}
              className="ml-3 text-red-500"
            >
              <FaInstagramSquare className="text-3xl hover:text-red-600" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/muhammad-arsalan-623179243/"}
              className="ml-3  text-blue-800"
            >
              <FaLinkedin className="text-3xl  hover:text-blue-900" />
            </Link>
          </span>
        </div>
      </footer>
      </div>
    );
  }