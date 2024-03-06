import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    const menuList = [
        {
            id: 1,
            title: 'HOME'
        },
        {
            id: 2,
            title: 'ABOUT'
        },
        {
            id: 3,
            title: 'PORTFOLIO'
        },
        {
            id: 4,
            title: 'RESUME'
        },
        {
            id: 5,
            title: 'CONTACT'
        },
    ];

    return (
        <div className='flex items-center justify-between text-white'>
            <div>
                <h2 className='text-[24px] font-bold text-white'>
                    <span className='text-white'></span>
                </h2>
            </div>

            <ul className='hidden gap-4 md:flex'>
                {menuList.map(({ id, title }) => (
                    <li
                        key={id}
                        className='hover:border-[1px] border-blue-500 rounded-full text-[15px] px-3 py-1 cursor-pointer'
                    >
                        <Link
                            to={title.toLowerCase()} // Assuming IDs are lowercase versions of titles
                            smooth={true}
                            duration={500}
                            style={{ color: 'white' }}
                           
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Header;