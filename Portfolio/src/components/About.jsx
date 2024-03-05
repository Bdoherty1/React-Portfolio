import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen text-white'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'> About</p>
            </div>

            <p className='mt-10 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum accusamus nemo eius numquam animi consequatur aperiam tenetur. Totam rerum nostrum ipsam exercitationem repudiandae perferendis ipsa ex, reiciendis labore optio.
            </p>

                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum tempora autem eius animi, dolor natus optio, asperiores eveniet hic ratione fugiat dignissimos alias beatae labore quidem ea assumenda ipsam!
                </p>
            </div>


        </div>
  )
}

export default About