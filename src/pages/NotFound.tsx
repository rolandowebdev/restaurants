import { PageContainer, buttonVariants } from '@/components'
import { FishOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <PageContainer className='flex h-[calc(100vh-64px)] items-center justify-center'>
      <div className='my-12 flex w-full flex-col items-center gap-2'>
        <FishOff size={150} className='text-zinc-800' />
        <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Page not found
        </h1>
        <p className='leading-3 [&:not(:first-child)]:mt-3'>
          The page you are looking for does not exist
        </p>
        <Link
          to='/'
          className={buttonVariants({
            size: 'lg',
            variant: 'outline',
            className: 'mt-4'
          })}>
          Back to home
        </Link>
      </div>
    </PageContainer>
  )
}
