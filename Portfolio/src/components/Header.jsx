import React from 'react'

function Header() {
    const menuList= [
        {
            id:1,
            title: 'HOME'
        },
        {
            id:1,
            title: 'ABOUT'
        },
        {
            id:1,
            title: 'PORTOFLIO'
        },
        {
            id:1,
            title: 'CONTACT'
        },
        {
            id:1,
            title: 'RESMUE'
        },
    ]
  return (
    <div>
        <div>
            <h2 clasName='text-[24px] font-bold text-white'>Header <span> Brian </span></h2>
        </div>
    </div>
  )
}

export default Header