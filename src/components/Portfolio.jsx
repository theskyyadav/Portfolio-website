import React from 'react'
import textutils from '../assets/portfolio/textutils.png'

import navbar from '../assets/portfolio/navbar.jpg'
import e_commerce_site from '../assets/portfolio/e_commerce_site.png'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'



const Portfolio = () => {
// Can add a code to each part of the array to go to onclick
  const portfolios = [
    {
        id: 1,
        src: textutils,
        code: "https://github.com/theskyyadav/textutils",
        demo: "https://theskyyadav.github.io/textutils/",
        title: "Textutils",
    }, 
    {
        id: 2,
        src: e_commerce_site,
        code: "https://github.com/theskyyadav/E-commerce-site",
        demo: "",
        title: "E-commerce-site",
    },
    {
        id: 3,
        src: navbar,
        code: "",
        demo: "",
        title: "",
    },
    {
        id: 4,
        src: reactSmooth,
        code: "",
        demo: "",
        title: "",
    },
  ]  

  return (
    <div name='portfolio' className='w-full text-white bg-gradient-to-b from-black to-gray-800 sm:h-fit md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pb-16 mx-auto'>
            <div>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
            {
            portfolios.map(({id,src,code,demo,title}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
                    <img src={src} alt="" className='duration-200 rounded-md hover:scale-105'/>
                    <div className='flex flex-col items-center justify-center'>
                    <div className="py-4">{title}</div>
                        <div className="flex">
                        <div>
                            <a href={demo}
                            target="_blank"
                            rel="noreferrer">
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                        </button>
                            </a>
                        </div>
                        <div>
                            <a href={code}
                            target="_blank"
                            rel="noreferrer">
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Code
                        </button>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio