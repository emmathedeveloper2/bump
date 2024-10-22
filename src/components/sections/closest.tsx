import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import DisplayCard from '../display-card'

const ClosestSection = () => {
    return (
        <>
            <MaxWidthWrapper className='py-10'>
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed'>
                    Affordable Condo's around you
                </h1>
            </MaxWidthWrapper>
            <MaxWidthWrapper wrapperClassName='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10'>
                <DisplayCard/>
                <DisplayCard/>
                <DisplayCard/>
                <DisplayCard/>
                <DisplayCard/>
                <DisplayCard/>
            </MaxWidthWrapper>
        </>
    )
}

export default ClosestSection
