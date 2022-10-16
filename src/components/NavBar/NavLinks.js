

import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
const NavLinks = () => {
  return (
    <div className='flex align-middle mr-6 gap-2 ml-3'>
        <Link to={'/'} 
        className='rounded-full bg-blue-500 p-3  transition-all hover:bg-slate-100
        hover:text-slate-700 text-blue-50' >
            <span 
            className='flex scale-150'>
                <AiFillHome className='text-inherit'/>
            </span>
        </Link>
        <Link to={'/favorites'} 
        className='rounded-full bg-blue-500 p-3 transition-all hover:bg-slate-100
        hover:text-red-500 text-blue-50' >
            <span 
            className='flex scale-150'>
                <MdFavorite className='text-inherit'/>
            </span>
        </Link>
        
        
    </div>
  )
}

export default NavLinks