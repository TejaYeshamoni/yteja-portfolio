import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
// import profile from "../assets/profile.png"; // Uncomment if you use this

const About: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1zET74OTZL2FfoLG8uP_Kv3eUh_ONSzC_/view?usp=sharing";
  const profileImageSrc = "/path/to/your/profile-image.png"; // Update this path

  return (
    <section id="about" className="text-white relative">
      <BackgroundBeams />
      <h1 className="text-center text-2xl font-bold text-gray-300">About</h1>
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Image section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
            <Image src={profileImageSrc} alt="profile image" layout="responsive" width={300} height={300} />
          </div>
        </div>

        {/* Bio section */}
        <div className="w-full lg:w-1/2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold m-0">
        <p className="text-lg md:text-xl mb-8">
  Passionate about crafting seamless web applications, I am a MERN Full Stack Developer with a strong foundation in both front-end and back-end development. I’m diving deep into full-stack development with a specialization in 4.0 technologies. The coding challenges and hands-on projects have truly ignited my love for this field.
  <br/><br/>
  Preparing me to tackle new challenges in the tech world, equipping me with cutting-edge skills, I have developed several impressive projects, including:
  <br/><br/>
  📌 <span className="text-blue-500 font-bold">Netflix GPT</span>: A sophisticated application integrating AI capabilities.
  <br/>
  📌 <span className="text-teal-500 font-bold">Jobby App</span>: A comprehensive job search platform.
  <br/>
  📌 <span className="text-purple-500 font-bold">Nxt Watch</span>: A YouTube clone that showcases advanced React capabilities.
  <br/>
  📌 <span className="text-red-500 font-bold">E-commerce Store Website</span>: Modeled after Amazon, focusing on user experience and scalability.
  <br/>
  and more...
  <br/><br/>
  My expertise includes:
  <br/><br/>
  🧑‍💻 <span className="text-yellow-500 font-bold">Front-End Development</span>: Creating responsive, interactive web interfaces with HTML, CSS, JavaScript, and React.
  <br/>
  🧑‍💻 <span className="text-green-500 font-bold">Back-End Development</span>: Building robust server-side applications with Node.js, Express, and MongoDB.
  <br/>
  🌐 <span className="text-indigo-500 font-bold">Version Control</span>: Utilizing Git for efficient version control and collaboration.
  <br/><br/>
  I am continuously upgrading my skills to the latest technologies in software development, always eager to learn and adapt. I am looking for opportunities where I can contribute, grow, and make a meaningful impact.
  <br/><br/>
  🖇️ Let’s connect and explore how we can work together to build amazing digital experiences!
  <br/><br/>
  📌 <span className="text-pink-500 font-bold">Skills:</span>
  <br/><br/>
  🔗 <span className="text-yellow-500">Front-End:</span> HTML, CSS, JavaScript, React, Redux, Tailwind CSS
  <br/>
  🔗 <span className="text-green-500">Back-End:</span> Node.js, Express.js, MongoDB, RESTful APIs, SQL
  <br/>
  ⚙️ <span className="text-teal-500">Tools & Platforms:</span> Git, GitHub, Visual Studio Code, Docker
</p>

          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-xl font-semibold text-black group"
            download
          >
            <span className="bg-green-400 rounded-xl h-14 w-48 flex items-center justify-center group-hover:bg-green-500 transition duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="ml-2 text-white">Resume</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
