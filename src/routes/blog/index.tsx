import { createFileRoute } from '@tanstack/react-router'
import MaxWidthWrapper from '../../components/max-width-wrapper'

const images = ['./assets/images/img.jpg', './assets/images/img2.jpg', './assets/images/img3.jpg']

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const BlogPost = ({ title = 'New lands to be acquired in london.' } : { title?: string }) => (
    <div className='relative h-[300px] z-0 rounded-lg overflow-hidden cursor-pointer'>
    <img src={getRandomImage()} alt="image" className="size-full object-cover -z-[1] absolute top-0 left-0"/>
    <div className="size-full flex flex-col justify-between gap-4 p-4 bg-gradient-to-b from-transparent to-[#00000090] text-white">
        <h1 className='text-xl md:text-3xl font-extrabold leading-relaxed my-6'>
            {title}
        </h1>

        <small>{(new Date()).toDateString()}</small>
    </div>
  </div>
)

const Blog = () => (
    <MaxWidthWrapper wrapperClassName='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <BlogPost />
        <BlogPost title='Approval from government for special condos in Lagos.'/>
        <BlogPost title='Christmas promo starting soon'/>
        <BlogPost title='New condos now available in China'/>
    </MaxWidthWrapper>
)

export const Route = createFileRoute('/blog/')({
  component: Blog,
})
