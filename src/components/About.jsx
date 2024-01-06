import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        Hello there! &#128075; I'm Aakash Yadav, a passionate final-year B.Tech student majoring in Computer science and engineering with a keen interest in web development. I am on the verge of completing my degree and ready to embark on an exciting journey in the tech industry.
        </p>
        <br />
        <p className="text-xl">My fascination with technology ignited during my early college days, leading me to dive deep into the world of web development. Through coursework, personal projects, and internships, I've acquired a solid foundation in front-end and back-end technologies, including:
        </p>
        <br />
        <ul>
            <li><strong className="text-xl ">Front-end :</strong> HTML, CSS, JavaScript (ReactJS)</li>
            <li><strong className="text-xl">Back-end :</strong> Node.js, Express.js, MongoDB</li>
            <li><strong className="text-xl">Version Control :</strong> Git, GitHub</li>
        </ul>


      </div>
    </div>
  )
}

export default About
