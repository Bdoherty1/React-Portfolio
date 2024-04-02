import React from 'react';

function About() {
  return (
    <div name='about' className='w-full min-h-screen text-white'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-md px-4 py-8 mx-auto'>
        <div className='pb-4'>
          <p className='text-3xl font-bold border-b-4 border-gray-500 md:text-4xl'> Welcome!</p>
        </div>

        <p className='mt-6 text-lg md:text-xl'>
          I'm Brian Doherty, a recent graduate of the University of Texas Full Stack Development Bootcamp, specializing in the MERN stack. My journey began at Curry College, where I earned a distinguished degree in Business Management and Applied Computing, along with a minor in Mathematics.
        </p>

        <p className='mt-4 text-lg md:text-xl'>
          With a fervent dedication to crafting innovative web solutions, I bring together a unique blend of business insights and technical expertise. I have a strong preference for frontend development, where I thrive in creating seamless user experiences.
        </p>

        <p className='mt-4 text-lg md:text-xl'>
          Proficient in MongoDB, Express.js, React.js, and Node.js, I am well-equipped to engineer dynamic applications that captivate users. My strategic mindset and unwavering commitment to growth make me an ideal collaborator for projects that push boundaries and deliver excellence.
        </p>

        <p className='mt-4 text-lg md:text-xl'>
          Let's join forces to build something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default About;
