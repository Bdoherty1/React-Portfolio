import React from 'react'

function Header() {
    const menuList = [
        {
            id: 1,
            title: 'HOME'
        },
        {
            id: 1,
            title: 'ABOUT'
        },
        {
            id: 1,
            title: 'PORTOFLIO'
        },
        {
            id: 1,
            title: 'CONTACT'
        },
        {
            id: 1,
            title: 'RESUME'
        },
    ]
    return (
        <div className='flex items-center jsutify-between'>
            <div>
                <h2 clasName='text-[24px] font-bold text-blue'>
                    <span className='text-blue-500'></span> </h2>
            </div>
            <div className='hidden md:flex gap-4'>
                {menuList.map((item) => (
                    <div>
                        <h2 className='text-white
                        hover:border-[1px] border-red-500 rounded-full
                        text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
                    </div>
                ))}
                <h2 className='text-white
                hover:border-[1px] border-red-500 rounded-full
                text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800'>HIRE ME</h2>
            </div>
            
        </div>
    )
}

export default Header