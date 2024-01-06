import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import cplus from '../assets/c++.png'
import tailwind from '../assets/tailwind.png'
import vscode from '../assets/vscode.png'
import node from '../assets/node.png'

function Experience() {
    const tech = [

        {
            id: 1,
            src: cplus,
            title: 'C++',
            style: 'shadow-blue-300',
        },
        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
    
        },
        {
            id: 4,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 5,
            src: node,
            title: 'NodeJS',
            style: 'shadow-lime-600',
        },
        {
            id: 6,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
            
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
        
        {
            id: 9,
            src: vscode,
            title: 'Microsoft Visual Studio Code',
            style: 'shadow-blue-400',
        },
      ]
        
      return (
        <div name='experience' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
                <div>
                    <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
    
                <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                    {tech.map(({id, src, title, style}) => (
                        <div 
                        key={id}
                        className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
      )
    }

export default Experience
