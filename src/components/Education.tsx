import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import nxtwave from "../assets/nxtwave.png"
import svdc from "../assets/svdc.jpg"
import nets from "../assets/nets.jpg"

const Education: React.FC = () => {
  const content = [
    {
      title: "Nxtwave Disruptive Technologies",
      description: `Industry Ready Certification in Full-stack Development
        Dec 2022 - 2023`,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image src={nxtwave} alt="Nxtwave" layout="responsive" />
        </div>
      ),
    },
    {
      title: "Swami Vivekananda Degree And PG College, Mahabubnagar",
      description: `BSc (Bachelor of Science) in Bio-Technology
        2019 - 2022`,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={svdc}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Swami Vivekananda College"
          />
        </div>
      ),
    },
    {
      title: "NEW ERA TALENT SCHOOL, BOOTHPUR, MAHABOOBNAGAR",
      description: `Secondary School Of Certificate (9.2 CGPA)
        2015 - 2016`,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={nets}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="New Era Talent School"
          />
        </div>
      ),
    },
  ];
  

  return (
    <section id="education" className="hero text-white relative mt-8">
      <BackgroundBeams />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
        <StickyScroll  content={content} />
      </div>
    </section>
  );
};

export default Education;
