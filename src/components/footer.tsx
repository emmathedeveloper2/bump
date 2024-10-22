import MaxWidthWrapper from './max-width-wrapper'
import { Link } from '@tanstack/react-router'

const Footer = () => {
    return (
        <footer className='w-full py-10'>
            <MaxWidthWrapper wrapperClassName='flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
                <div className='flex items-center gap-4'>
                    <img src="./assets/images/favicon.png" alt="logo" className='size-[50px]' />
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
                    <a href='#' className='hover:underline'>
                        Rent a condo
                    </a>
                    <a href='#' className='hover:underline'>
                        Buy a condo
                    </a>
                    <a href='#' className='hover:underline'>
                        Make an offer
                    </a>
                    <Link to='/blog' className='hover:underline'>
                        Blog
                    </Link>
                </div>

                <p className='w-full lg:w-max text-center'>Copyright 2024</p>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer
