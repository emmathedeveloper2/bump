import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import MaxWidthWrapper from '../max-width-wrapper'

const HeroSection = () => {
    return (
        <MaxWidthWrapper className='py-10' wrapperClassName='flex flex-col md:flex-row md:items-center justify-between gap-4'>
            <div className='flex flex-col w-full gap-2 lg:gap-8'>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed">
                    <span className='underline decoration-wavy decoration-emerald-500'>Renovated</span> condos. <br />
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed">
                    <span className='underline decoration-wavy decoration-emerald-500'>Amazing</span> locations.
                </h1>
            </div>
            <div className='flex md:flex-col items-center gap-8'>
                <a href="http://x.com/emmathedev">
                    <TwitterIcon />
                </a>
                <a href="http://">
                    <FacebookIcon />
                </a>
                <a href="http://instagram.com/emmathedeveloper">
                    <InstagramIcon />
                </a>
            </div>
        </MaxWidthWrapper>
    )
}

export default HeroSection