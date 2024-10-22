import MaxWidthWrapper from '../max-width-wrapper'
import ReviewCard from '../review-card'

const ReviewSection = () => {
  return (
    <MaxWidthWrapper className='py-10'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold leading-relaxed mb-10'>
          Testimonies of our customers
        </h1>
        <div className='W-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ReviewCard 
                avatarUrl='./assets/images/avatar1.jpg'
                name='Sarah M.'
                review={`Absolutely loved my stay at Bump! The condo was spacious, modern, and had everything I needed. The location was perfect, with easy access to shops and restaurants. The staff was incredibly helpful and friendly. Highly recommend!`}
                rating={4}
            />
            <ReviewCard 
                avatarUrl='./assets/images/avatar2.jpg'
                name='David K.'
                review={`Renting from Bump was a breeze. Their website was easy to navigate, and the booking process was straightforward. The condo we rented was in great condition and had all the amenities we needed. We'll definitely be renting from them again.`}
                rating={3}
            />
            <ReviewCard 
                avatarUrl='./assets/images/avatar3.jpg'
                name='Emily K.'
                review={`I was so impressed with the quality of the condos Bump offers. The finishes were top-notch, and the furniture was comfortable. The staff was always available to answer any questions and were very accommodating. I would definitely recommend Bump to anyone looking for a luxurious rental experience.`}            
                rating={4}
            />
        </div>
    </MaxWidthWrapper>
  )
}

export default ReviewSection