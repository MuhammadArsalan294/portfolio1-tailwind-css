"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I&apos;m a
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mb-8 leading-relaxed">
            I believe, &quot;Exploring the future one algorithm at a time, because{" "}
            <em>AI</em> and <em>WEB DEVELOPMENT</em> is the language of
            tomorrow&quot;.
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            src="/images/mypic.jpg"
            alt="Muhammad Arsalan, Web Developer"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
