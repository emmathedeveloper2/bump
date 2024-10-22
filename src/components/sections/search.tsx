import { SearchIcon } from 'lucide-react'
import MaxWidthWrapper from '../max-width-wrapper'


const SearchSection = () => {
  return (
    <MaxWidthWrapper className='py-10' wrapperClassName='flex items-center gap-2'>
        <button className='p-4 grid place-items-center rounded bg-emerald-100 text-emerald-500 placeholder:text-emerald-500'>
            <SearchIcon />
        </button>
        <input 
            type="text" 
            placeholder='Search for an amazing condo...'
            className='flex-1 outline-none p-4 rounded bg-emerald-100 text-emerald-950 placeholder:text-emerald-500'
        />
    </MaxWidthWrapper>
  )
}

export default SearchSection