import { Skeleton } from '..'

export const CardSkeleton = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='h-36'>
        <Skeleton className='h-full w-full' />
      </div>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-4' />
        <Skeleton className='h-4 w-1/2' />
      </div>
      <Skeleton className='h-4' />
    </div>
  )
}
