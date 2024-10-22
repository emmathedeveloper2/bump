import { createFileRoute } from '@tanstack/react-router'
import MaxWidthWrapper from '../components/max-width-wrapper'
import HeroSection from '../components/sections/hero'
import DisplayCard from '../components/display-card'
import SearchSection from '../components/sections/search'
import ClosestSection from '../components/sections/closest'
import ReviewSection from '../components/sections/reviews'
import { ArrowRightIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <>
    <HeroSection />
    <MaxWidthWrapper wrapperClassName='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <DisplayCard/>
      <DisplayCard/>
      <DisplayCard/>
    </MaxWidthWrapper>
    <SearchSection />

    <MaxWidthWrapper className='py-10' wrapperClassName='flex flex-col lg:flex-row items-center gap-4'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed my-6'>
        <span className='underline decoration-wavy decoration-emerald-500'>Comfort</span> and <span className='underline decoration-wavy decoration-emerald-500'>Luxury</span> in one fold.
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate eveniet beatae unde quos asperiores rem veniam placeat, provident quisquam repellat pariatur est dolorum impedit voluptatum in sint soluta rerum.</p>
    </MaxWidthWrapper>

    <ClosestSection />

    <ReviewSection />

    <MaxWidthWrapper className='py-10 bg-emerald-200 text-emerald-800' wrapperClassName='flex flex-col gap-4'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed my-6'>
        Get your dream home with us today.
      </h1>
      <p>What's stopping you from getting your dream home?</p>
      <p>Contact us today and let's get started.</p>
      <button className='bg-emerald-950 text-white px-4 py-2 rounded w-max flex gap-2'>
        Get in touch 
        <ArrowRightIcon />
      </button>
    </MaxWidthWrapper>
  </>
}
