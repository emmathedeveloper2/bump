import { MenuIcon, X } from 'lucide-react'
import MaxWidthWrapper from './max-width-wrapper'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const Nav = () => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <MaxWidthWrapper className='min-h-max'>
      <nav className='flex justify-between items-center py-4'>
        <Link to='/' className='flex items-center'>
          <img src='/assets/images/favicon.png' alt='logo' className='size-[70px]' />
        </Link>

        <div className={`flex items-center justify-center gap-6 flex-col lg:flex-row space-x-4 z-10 fixed top-0 left-0 bg-emerald-50 h-screen w-screen ${navOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform lg:static lg:h-max lg:size-max lg:translate-x-0`}>
          <a href='#' onClick={() => setNavOpen(false)} className='px-4 py-2 hover:underline'>
            Rent a condo
          </a>
          <a href='#' onClick={() => setNavOpen(false)} className='px-4 py-2 hover:underline'>
            Buy a condo
          </a>
          <Link onClick={() => setNavOpen(false)} to='/blog' className='px-4 py-2 hover:underline'>
            Blog
          </Link>
          <a href='#' onClick={() => setNavOpen(false)} className='px-4 py-2 rounded bg-emerald-950 text-white shadow flex gap-2'>
            Make an offer
          </a>

          <button onClick={() => setNavOpen(false)} className='grid place-items-center bg-emerald-950 text-white size-[50px] rounded-full lg:hidden'>
            <X />
          </button>
        </div>

        <button onClick={() => setNavOpen(true)} className='grid place-items-center lg:hidden'>
          <MenuIcon />
        </button>
      </nav>
    </MaxWidthWrapper>
  )
}

export default Nav
