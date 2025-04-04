import React from 'react';
import photo from '../assets/welcome.jpg';
import star from '../assets/star.png';
import cloud from '../assets/cloud.png';
import mindmap  from '../assets/mind-map.png';
function MainPage() {
  return (
    <div className="w-screen  bg-gradient-to-r from-blue-500 to-purple-500 h-full  text-white italic p-4 space-y-2 md:p-10">
      <div className="mt-40 flex flex-col   md:flex-row items-center md:items-start md:justify-center max-w-1xl md:space-y-3
      space-y-3  
      md:space-x-3">

        {/* Text Section */}
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug break-words">
            We build Innovative Solutions for every<br />body.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-snug">
            At our core, we are about people. We imagine, design and create websites and applications that are not just digital, but human-focused. By blending innovation and content.
          </p>
        </div>

        {/* Image Section */}
        <img
          src={photo}
          alt="Placeholder"
          className="mb-10 w-[500px]  md:max-w-sm  h-auto "
        />
      </div>

     <div>
     <h2 className=' text-2xl text-center italic
        '>Our Digital Core Capabilities Navigate Growth for Enterprises & Startups </h2>

        {/*  //services // */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center">
  <div className="md:border-2 md:rounded-3xl md:w-fit p-4 flex flex-col items-center space-y-4">
    <img className="md:w-1/4 w-1/8" src={star} alt="star" />
    <header className="italic text-center text-2xl">Web Solutions</header>
    <p className="text-center md:max-w-[200px]">
      We can provide you with custom online software in case you want something more than just a website. Our experts offer:
      <ul className="list-disc list-inside flex  flex-1 md:flex-col">
        <li>Personalized solutions.</li>
        <li>Customization.</li>
        <li>Integration of features.</li>
        <li>Full-development cycle.</li>
      </ul>
    </p>
  </div>

  <div className="md:border-2 md:rounded-3xl md:w-fit p-4 flex flex-col items-center space-y-4">
    <img className="md:w-1/4 w-1/8" src={cloud} alt="cloud" />
    <header className="italic text-center text-2xl">Cloud Solutions</header>
    <p className="text-center md:max-w-[200px]">
      Our cloud solutions empower businesses to scale effortlessly, ensuring secure and reliable access to data and applications. We specialize in:
      <ul className="list-disc list-inside flex  flex-1 md:flex-col">
        <li>Cloud migration and deployment.</li>
        <li>Scalable infrastructure design.</li>
        <li>Data security and compliance.</li>
        <li>24/7 monitoring and support.</li>
      </ul>
    </p>
  </div>

  <div className="md:border-2 md:rounded-3xl md:w-fit p-4 flex flex-col items-center space-y-4">
    <img className="md:w-1/4 w-1/8" src={mindmap} alt="cloud" />
    <header className="italic text-center text-2xl">Cloud Solutions</header>
    <p className="text-center md:max-w-[200px]">
      Our cloud solutions empower businesses to scale effortlessly, ensuring secure and reliable access to data and applications. We specialize in:
      <ul className="list-disc list-inside flex  flex-1 md:flex-col">
        <li>Cloud migration and deployment.</li>
        <li>Scalable infrastructure design.</li>
        <li>Data security and compliance.</li>
        <li>24/7 monitoring and support.</li>
      </ul>
    </p>
  </div>
</div>
        
     </div>
      
    </div>
  );
}

export default MainPage;