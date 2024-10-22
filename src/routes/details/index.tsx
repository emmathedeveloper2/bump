import { createFileRoute } from '@tanstack/react-router'
import MaxWidthWrapper from '../../components/max-width-wrapper'
import { MapPinIcon, PhoneCallIcon } from 'lucide-react'

const DetailsPage = () => (
    <MaxWidthWrapper wrapperClassName='flex flex-col gap-4'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed my-6'>
            2 Bedrooms Duplex, with swimming pool
        </h1>

        <div className='w-full overflow-auto'>
            <div className='w-max inline-flex gap-2'>
                <div className='size-[400px]'>
                    <img src="./assets/images/img.jpg" alt="detail image" className='size-full object-cover' />
                </div>
                <div className='size-[400px]'>
                    <img src="./assets/images/img.jpg" alt="detail image" className='size-full object-cover' />
                </div>
                <div className='size-[400px]'>
                    <img src="./assets/images/img.jpg" alt="detail image" className='size-full object-cover' />
                </div>
                <div className='size-[400px]'>
                    <img src="./assets/images/img.jpg" alt="detail image" className='size-full object-cover' />
                </div>
            </div>
        </div>

        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed'>$750,000</h1>

        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <MapPinIcon />
                <p>7, Bridgeton house, Papi Street, NY</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4'>
                <span className='px-8 py-2 rounded-full bg-emerald-200 text-emerald-500 w-max'>
                    Rent
                </span>
                <button className='px-8 py-2 rounded-full bg-emerald-950 text-white flex items-center justify-center gap-2'>
                    <PhoneCallIcon />
                    <p>Make an enquiry</p>
                </button>
            </div>
        </div>
    </MaxWidthWrapper>
)

export const Route = createFileRoute('/details/')({
    component: DetailsPage,
})
