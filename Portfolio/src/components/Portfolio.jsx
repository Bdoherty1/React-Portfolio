import React, { useState } from 'react';
// import { Container, Carousel } from 'react-bootstrap';
// import { BsStarFill } from 'react-icons/bs'; 
import workdaySchedule from '../assets/imgs/workdaySchedule.png';
import randomMeme from '../assets/imgs/randomMeme.png';
import invoiceGenerator from '../assets/imgs/invoiceGenerator.png';
import jsCodeQuiz from '../assets/imgs/jsCodeQuiz.png';

const Portfolio = () => {
    const [projectInfo, setProjectInfo] = useState(null);

    const portfolios = [
        {
            id: 1,
            src: workdaySchedule,
            description: 'Workday Schedule project description goes here...',
            repoLink: 'https://github.com/your-workday-schedule-repo'
        },
        {
            id: 2,
            src: invoiceGenerator,
            href: 'https://invoicinator-e5b9fce169c1.herokuapp.com/login#signup',
            description: 'INVOICINATOR is a dynamic invoicing solution built using cutting-edge technologies such as Node.js and mailjet. It offers a user-friendly dashboard for creating and managing invoices effortlessly. Say farewell to manual invoicing hassles and hello to streamlined efficiency with INVOICINATOR. Experience seamless billing and client management in one powerful platform. Simply click <a href="https://invoicinator-e5b9fce169c1.herokuapp.com/dashboard">live link</a> to deploy',
            repoLink: 'https://github.com/AnthonyBuffill/invoicinator.git'
        },
        {
            id: 3,
            src: randomMeme,
            description: 'Introducing Only Laughs your go to for generating random memes and jokes effortlessly! With a user-friendly interface and seamless navigation, enjoy endless entertainment with our Picture and Joke Generators. Save your favorite memes in the "Meme Vault" or opt for spontaneity with the Randomizer button. Crafted with HTML, CSS, TailwindCSS, and JavaScript, Only Laughs guarantees laughter for users of all humor preferences. As part of the team, I focused on frontedn deveolpment crafting the engaging Home page, ensuring an immersive experience for every visitor.Simply click the <a href="https://anthonybuffill.github.io/only-laughs/">live link</a> to deploy',
            repoLink: 'https://github.com/AnthonyBuffill/only-laughs.git'
        },
        {
            id: 4,
            src: jsCodeQuiz,
            description: 'JavaScript Code Quiz offers a dynamic way to test your Java basics knowledge. With features like a responsive design, a timer to track progress, and an interactive quiz interface, it\'s designed for an engaging experience. Simply click the <a href="https://bdoherty1.github.io/JS-Code-Quiz-1/">live link</a> to start the quiz in your browser. The game starts with a timer upon clicking "Start," where users answer a series of questions. Incorrect answers incur a time penalty. After completion or when the timer ends, users can save their initials and score. Enjoy a challenging yet fun quiz experience!',
            repoLink: 'https://github.com/Bdoherty1/JS-Code-Quiz-1.git'
        },
    ];

    const handlePreviewClick = (description) => {
        // Toggle project description display
        setProjectInfo(projectInfo === description ? null : description);
    };
    
    return (
        <div name='portfolio' className='min-h-screen text-white max-w-screen-full from-slate-900 to-gray-600'>
            <div>
                <div className='pb-8'>
                    <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid gap-8 text-center sm:grid-cols-1 md:grid-cols-2 sm:px-2'>
                    {portfolios.map(({ id, src, description, repoLink }) => (
                        <div key={id} className='rounded-lg shadow-md shadow-gray-400'>
                            <img
                                src={src}
                                alt=''
                                className='duration-200 rounded-md hover:scale-105'
                            />
                            <div className='flex items-center justify-center'>
                                <button
                                    className='w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'
                                    onClick={() => handlePreviewClick(description)}
                                >
                                    Preview
                                </button>
                                <a
                                    href={repoLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-center w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'
                                    style={{ textAlign: 'center' }}
                                    dangerouslySetInnerHTML={{
                                        __html: 'GitHub<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.482 2 2 6.482 2 12c0 4.42 2.865 8.17 6.839 9.494.5.09.683-.216.683-.481 0-.237-.009-.866-.013-1.702-2.782.603-3.37-1.344-3.37-1.344-.454-1.153-1.108-1.461-1.108-1.461-.908-.619.068-.606.068-.606 1.004.071 1.531 1.03 1.531 1.03.892 1.53 2.34 1.088 2.91.832.091-.644.35-1.087.637-1.338-2.235-.256-4.582-1.117-4.582-4.963 0-1.096.39-1.991 1.03-2.692-.104-.254-.448-1.275.099-2.656 0 0 .84-.27 2.75 1.029.8-.223 1.654-.334 2.504-.338.847.004 1.705.115 2.504.338 1.909-1.299 2.747-1.029 2.747-1.029.548 1.381.206 2.402.102 2.656.642.701 1.026 1.596 1.026 2.692 0 3.855-2.351 4.704-4.594 4.957.361.312.681.924.681 1.857 0 1.344-.012 2.427-.012 2.758 0 .267.181.577.688.479C19.135 20.166 22 16.416 22 12c0-5.518-4.482-10-10-10z"/></svg>'
                                    }}                                />
                            </div>
                            <div className='mt-8 text-center'>
                                {projectInfo === description && (
                                    <p className='text-lg' dangerouslySetInnerHTML={{ __html: description }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;


// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import workdaySchedule from '../assets/imgs/workdaySchedule.png';
// import randomMeme from '../assets/imgs/randomMeme.png';
// import invoiceGenerator from '../assets/imgs/invoiceGenerator.png';
// import jsCodeQuiz from '../assets/imgs/jsCodeQuiz.png';

// const Portfolio = () => {
//     const [projectInfo, setProjectInfo] = useState(null);

//     const portfolios = [
//         {
//             id: 1,
//             src: workdaySchedule,
//             description: 'Workday Schedule project description goes here...',
//             repoLink: 'https://github.com/your-workday-schedule-repo'
//         },
//         {
//             id: 2,
//             src: invoiceGenerator,
//             href: 'https://invoicinator-e5b9fce169c1.herokuapp.com/login#signup',
//             description: 'INVOICINATOR is a dynamic invoicing solution built using cutting-edge technologies such as Node.js and mailjet. It offers a user-friendly dashboard for creating and managing invoices effortlessly. Say farewell to manual invoicing hassles and hello to streamlined efficiency with INVOICINATOR. Experience seamless billing and client management in one powerful platform. Simply click <a href="https://invoicinator-e5b9fce169c1.herokuapp.com/dashboard">live link</a> to deploy',
//             repoLink: 'https://github.com/AnthonyBuffill/invoicinator.git'
//         },
//         {
//             id: 3,
//             src: randomMeme,
//             description: 'Introducing Only Laughs your go to for generating random memes and jokes effortlessly! With a user-friendly interface and seamless navigation, enjoy endless entertainment with our Picture and Joke Generators. Save your favorite memes in the "Meme Vault" or opt for spontaneity with the Randomizer button. Crafted with HTML, CSS, TailwindCSS, and JavaScript, Only Laughs guarantees laughter for users of all humor preferences. As part of the team, I focused on frontedn deveolpment crafting the engaging Home page, ensuring an immersive experience for every visitor.Simply click the <a href="https://anthonybuffill.github.io/only-laughs/">live link</a> to deploy',
//             repoLink: 'https://github.com/AnthonyBuffill/only-laughs.git'
//         },
//         {
//             id: 4,
//             src: jsCodeQuiz,
//             description: 'JavaScript Code Quiz offers a dynamic way to test your Java basics knowledge. With features like a responsive design, a timer to track progress, and an interactive quiz interface, it\'s designed for an engaging experience. Simply click the <a href="https://bdoherty1.github.io/JS-Code-Quiz-1/">live link</a> to start the quiz in your browser. The game starts with a timer upon clicking "Start," where users answer a series of questions. Incorrect answers incur a time penalty. After completion or when the timer ends, users can save their initials and score. Enjoy a challenging yet fun quiz experience!',
//             repoLink: 'https://github.com/Bdoherty1/JS-Code-Quiz-1.git'
//         },
//     ];

//     const handlePreviewClick = (description) => {
//         // Toggle project description display
//         setProjectInfo(projectInfo === description ? null : description);
//     };
    
//     return (
//         <div name='portfolio' className='min-h-screen text-white max-w-screen-full from-slate-900 to-gray-600'>
//             <div>
//                 <div className='pb-8'>
//                     <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
//                     <p className='py-6'>Check out some of my work here</p>
//                 </div>

//                 <div className='grid gap-8 text-center sm:grid-cols-1 md:grid-cols-2 sm:px-2'>
//                     {portfolios.map(({ id, src, description, repoLink }) => (
//                         <div key={id} className='rounded-lg shadow-md shadow-gray-400'>
//                             <Carousel
//                                 additionalTransfrom={0}
//                                 arrows
//                                 autoPlay
//                                 autoPlaySpeed={3000}
//                                 centerMode={false}
//                                 className=''
//                                 containerClass='carousel-container'
//                                 customButtonGroup={<button>Button Group</button>}
//                                 dotListClass=''
//                                 draggable
//                                 focusOnSelect={false}
//                                 infinite
//                                 itemClass=''
//                                 keyBoardControl
//                                 minimumTouchDrag={80}
//                                 renderButtonGroupOutside={false}
//                                 renderDotsOutside={false}
//                                 responsive={{
//                                     desktop: {
//                                         breakpoint: {
//                                             max: 3000,
//                                             min: 1024
//                                         },
//                                         items: 3,
//                                         partialVisibilityGutter: 40
//                                     },
//                                     mobile: {
//                                         breakpoint: {
//                                             max: 464,
//                                             min: 0
//                                         },
//                                         items: 1,
//                                         partialVisibilityGutter: 30
//                                     },
//                                     tablet: {
//                                         breakpoint: {
//                                             max: 1024,
//                                             min: 464
//                                         },
//                                         items: 2,
//                                         partialVisibilityGutter: 30
//                                     }
//                                 }}
//                                 showDots
//                                 sliderClass=''
//                                 slidesToSlide={1}
//                                 swipeable
//                             >
//                                 <img src={src} alt='' className='duration-200 rounded-md hover:scale-105' />
//                             </Carousel>
//                             <div className='flex items-center justify-center'>
//                                 <button
//                                     className='w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'
//                                     onClick={() => handlePreviewClick(description)}
//                                 >
//                                     Preview
//                                 </button>
//                                 <a
//                                     href={repoLink}
//                                     target='_blank'
//                                     rel='noopener noreferrer'
//                                     className='flex items-center justify-center w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'
//                                     style={{ textAlign: 'center' }}
//                                     dangerouslySetInnerHTML={{
//                                         __html: 'GitHub<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.482 2 2 6.482 2 12c0 4.42 2.865 8.17 6.839 9.494.5.09.683-.216.683-.481 0-.237-.009-.866-.013-1.702-2.782.603-3.37-1.344-3.37-1.344-.454-1.153-1.108-1.461-1.108-1.461-.908-.619.068-.606.068-.606 1.004.071 1.531 1.03 1.531 1.03.892 1.53 2.34 1.088 2.91.832.091-.644.35-1.087.637-1.338-2.235-.256-4.582-1.117-4.582-4.963 0-1.096.39-1.991 1.03-2.692-.104-.254-.448-1.275.099-2.656 0 0 .84-.27 2.75 1.029.8-.223 1.654-.334 2.504-.338.847.004 1.705.115 2.504.338 1.909-1.299 2.747-1.029 2.747-1.029.548 1.381.206 2.402.102 2.656.642.701 1.026 1.596 1.026 2.692 0 3.855-2.351 4.704-4.594 4.957.361.312.681.924.681 1.857 0 1.344-.012 2.427-.012 2.758 0 .267.181.577.688.479C19.135 20.166 22 16.416 22 12c0-5.518-4.482-10-10-10z"/></svg>'
//                                     }}                                />
//                             </div>
//                             <div className='mt-8 text-center'>
//                                 {projectInfo === description && (
//                                     <p className='text-lg' dangerouslySetInnerHTML={{ __html: description }} />
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Portfolio;
