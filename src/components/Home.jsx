import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import HeroImage from "../assets/heroImage.png"
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";
import ResumePdf from '../Deedy_CV (9).pdf';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full px-10'>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>
                    I'm a Full Stack Web Developer
                </h2>
                <p className='py-4 text-gray-500 max-wd-lg'>
                Hello, I'm Aakash Yadav, and this is my portfolio website to showcase my skills, experience, and projects.
                </p>
            <div className="flex flex-row gap-4">
                <div>
                <Link to="portfolio" smooth duration={500} className=" group text-white px-6 w-fit
                py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                 to-blue-500 
                ">Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <FaCircleArrowRight size={20} className='ml-1.5'/>  </span>
                  
                </Link>
                </div>
                
                <div>
                <a
                href={ResumePdf}
                download="Aakash_yadav_resume"
                target="_blank"
                rel="noopener noreferrer" smooth duration={500} className=" group text-white px-6 w-fit
                py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-500 hover:scale-105 duration-300" 
                >
                <button>Resume</button>
                <span >
                  <FaFileDownload size={20} className='ml-1.5'/>  </span>
                </a>

                </div>
              
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home
