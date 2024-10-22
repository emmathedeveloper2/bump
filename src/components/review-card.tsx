type ReviewCardProps = {
    avatarUrl?: string,
    name: string,
    review: string,
    rating: number
}

const avatars = ['./assets/images/avatar1.jpg', './assets/images/avatar2.jpg', './assets/images/avatar3.jpg']

const getRandomImage = () => avatars[Math.floor(Math.random() * avatars.length)];

const ReviewCard = ({
    avatarUrl,
    name,
    review,
} : ReviewCardProps) => {
  return (
    <div className='flex flex-col gap-4 p-4 relative before:size-[50px] before:absolute before:top-0 before:left-0 before:z-10 before:border-l-2 before:border-t-2 before:border-emerald-500 after:size-[50px] after:absolute after:bottom-0 after:right-0 after:z-10 after:border-r-2 after:border-b-2 after:border-emerald-500'>
      <div className='size-[50px] rounded-full overflow-hidden'>
        <img src={avatarUrl ?? getRandomImage()} alt="avatar" className='object-cover size-full rounded-full' />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-sm leading-loose'>{review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
