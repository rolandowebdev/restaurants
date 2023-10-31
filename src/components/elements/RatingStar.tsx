import { cn } from '@/lib'

type RatingStarProps = {
  rating: number
}

export const RatingStar = ({ rating }: RatingStarProps) => {
  const totalStars = 5
  return (
    <div className='flex items-center'>
      {[...Array(totalStars)].map((_, index) => {
        index += 1
        return (
          <span
            key={index}
            className={cn(
              index <= rating ? 'text-yellow-300' : 'text-slate-300'
            )}>
            <span className='text-2xl'>&#9733;</span>
          </span>
        )
      })}
    </div>
  )
}
