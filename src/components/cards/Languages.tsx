import React from 'react';
import Image from 'next/image';
import Java from '../../svg/java-svgrepo-com.svg';
import JavaScript from '../../svg/javascriptsvg.svg';
import C from '../../svg/icons8-c-programming-480.svg';
import Python from '../../svg/python-svgrepo-com.svg';


const Languages = () => {
  const skills = [
    { name: 'JavaScript', icon: JavaScript },
    { name: 'Java', icon: Java },
    { name: 'C', icon: C },
    { name: 'Python', icon: Python },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 flex justify-center items-center">
      <div className="text-center w-full">
        <h1 className="text-2xl font-bold mb-4 text-white"> Programming Languages</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <p className="mt-2 text-sm sm:text-lg text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;