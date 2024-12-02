"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "../styles/hero.css";  // Import custom CSS file

export default function Hero() {
  return (
<<<<<<< HEAD
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I&apos;m a
=======
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            I'm a
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="hero-description">
            I believe, "Exploring the future one algorithm at a time, because{" "}
            <em>AI</em> and <em>WEB DEVELOPMENT</em> is the language of
            tomorrow".
          </p>
<<<<<<< HEAD
          <div className="flex justify-center">
            <Link href="#contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
=======
          <div className="hero-button-container">
            <Link href={"#contact"}>
              <button className="hero-button">
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
                Contact
              </button>
            </Link>
          </div>
        </div>
<<<<<<< HEAD
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
=======
        <div className="hero-image-container">
>>>>>>> ebec52f44919525b1634b524e43bbafa0ac41293
          <Image
            className="hero-image"
            src="/images/mypic.jpg"
            alt="Photo of Muhammad Arsalan, a passionate web developer"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

