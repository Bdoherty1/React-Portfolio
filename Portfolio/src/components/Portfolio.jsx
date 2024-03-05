
import React from 'react'
import workdaySchedule from '../assets/imgs/workdaySchedule.png'
import randomMeme from '../assets/imgs/randomMeme.png'
import invoiceGenerator from '../assets/imgs/invoiceGenerator.png'
import jsCodeQuiz from '../assets/imgs/jsCodeQuiz.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: workdaySchedule,
            href: ''
        },
        {
            id: 2,
            src: randomMeme
            
        },
        {
            id: 3,
            src: invoiceGenerator,
            href: 'https://invoicinator-e5b9fce169c1.herokuapp.com/login#signup'
        },
        {
            id: 4,
            src: jsCodeQuiz
        },
    ]

    return (
        <div name='portfolio' 
        className='min-h-screen text-white max-w-screen-full from-slate-900 to-gray-600'
        >
            <div>
                <div className='pb-8'>
                    <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

           <div className='grid gap-8 px-12 sm:grid-cols-1 md:grid-cols-2 sm:px-0'>
                {portfolios.map(({ id, src }) => (
                    <div key={id}
                         className='rounded-lg shadow-md shadow-gray-400'>
                        <img
                            src={src}
                            alt=''
                            className='duration-200 ronded-md hover:scale-105'
                        />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 text-white duration-200 bg-blue-500 hover:scale-105'>Preview</button>
                            <button className='w-1/2 px-6 py-3 m-4 text-white duration-200 bg-blue-500 hover:scale-105'>Code</button>
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