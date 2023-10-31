import { ImageContainer, PageContainer, RatingStar } from '@/components'
import { RestaurantsApiUrl } from '@/constants'
import { useDetailRestaurant } from '@/hooks/useDetailRestaurant'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { restaurantId } = useParams()
  const { data: detailRestaurant } = useDetailRestaurant({
    id: restaurantId
  })

  return (
    <PageContainer>
      <div className='text-center'>
        <h1 className='mb-1 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          {detailRestaurant?.restaurant.name}
        </h1>
        <span className='leading-7 [&:not(:first-child)]:mt-6'>
          {detailRestaurant?.restaurant.address}
        </span>
      </div>

      <section className='mt-10 sm:mt-12 lg:mt-14'>
        <div className='flex gap-10'>
          <ImageContainer className='flex-1'>
            <img
              className='h-full w-full rounded-lg object-cover'
              src={`${RestaurantsApiUrl.imageUrl}/${detailRestaurant?.restaurant.pictureId}`}
              alt=''
            />
          </ImageContainer>
          <div className='flex-1'>
            <div className='flex items-center gap-3'>
              <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>
                {detailRestaurant?.restaurant.name}
              </h2>
              <RatingStar
                rating={detailRestaurant?.restaurant.rating as number}
              />
            </div>
            <p className='mb-2 leading-7 text-zinc-500 [&:not(:first-child)]:mt-6'>
              {detailRestaurant?.restaurant.description}
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
