import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { Link } from '@tanstack/react-router'

type DisplayCardProps = {
    imageUrl?: string,
    address?: string,
    detail?: string
}

const images = ['./assets/images/img.jpg', './assets/images/img2.jpg', './assets/images/img3.jpg']

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const DisplayCard = ({ imageUrl , address = '7, Wasiu Popoola Street' , detail = '2 Bedroom flat' } : DisplayCardProps) => {



  return (
    <Link to="/details" className='relative h-[300px] z-0 rounded-lg overflow-hidden'>
      <img src={imageUrl ?? getRandomImage()} alt="image" className="size-full object-cover -z-[1] absolute top-0 left-0"/>
      <div className="size-full flex flex-col justify-end gap-4 p-4 bg-gradient-to-b from-transparent to-[#00000090] text-white">
        <div className="flex items-center gap-2">
            <MapPinIcon />

            <small>{address}</small>
        </div>

       {detail && <p>{detail}</p>}
      </div>

      <button title="button" className="size-[50px] rounded-full grid place-items-center absolute z-10 top-4 right-4 bg-white text-emerald-500 transition-all hover:text-black">
        <ArrowRightIcon />
      </button>
    </Link>
  )
}

export default DisplayCard
