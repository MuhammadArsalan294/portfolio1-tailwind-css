import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div id="about">
            <section className="text-gray-600 bg-gray-300 body-font">
                <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded mx-auto w-[300px]"
                            alt="Muhammad Arsalan&apos;s profile picture"
                            src="/images/mypic.jpg"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            About Me
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            My name is Muhammad Arsalan. I completed my matriculation in
                            Science and Intermediate in Commerce and Graduation in Bachelor of
                            commerce (B.COM). Now I&apos;m on the way to learn Artificial
                            Intelligence. I completed a few steps of learning HTML, CSS, and
                            JavaScript/TypeScript to become a Full-Stack Developer.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            <strong>I Believe:</strong> &quot;Exploring the future one algorithm at
                            a time, because <strong>AI</strong> is the language of tomorrow&quot;
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/cv/cv1.pdf"
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};