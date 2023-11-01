import {
  Badge,
  Card,
  CardContent,
  ImageContainer,
  PageContainer,
  RatingStar,
  Separator
} from '@/components'
import { RestaurantsApiUrl } from '@/constants'
import { useDetailRestaurant } from '@/hooks'
import { GlassWater, Pizza } from 'lucide-react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { restaurantId } = useParams()
  const { data } = useDetailRestaurant({
    id: restaurantId
  })

  const detailRestaurant = data?.restaurant

  return (
    <PageContainer>
      <div className='text-center'>
        <h1 className='mb-3 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          {detailRestaurant?.name}
        </h1>
        <span className='leading-7 [&:not(:first-child)]:mt-6'>
          {detailRestaurant?.address}
        </span>
      </div>

      <article className='my-10 sm:my-12 lg:my-14'>
        <div className='grid grid-cols-1 gap-10 xl:grid-cols-2'>
          <ImageContainer>
            <img
              className='h-full w-full rounded-lg object-cover'
              src={`${RestaurantsApiUrl.imageUrl}/${detailRestaurant?.pictureId}`}
              alt=''
            />
          </ImageContainer>
          <div>
            <div className='flex flex-wrap items-center gap-3'>
              <h2 className='text-3xl font-semibold tracking-tight first:mt-0'>
                {detailRestaurant?.name}
              </h2>
              <RatingStar rating={detailRestaurant?.rating as number} />
            </div>
            <p className='mb-2 leading-7 text-zinc-500 [&:not(:first-child)]:mt-6'>
              {detailRestaurant?.description}
            </p>
            <div className='mt-4 flex items-center gap-1'>
              {detailRestaurant?.categories.map((category, id) => (
                <Badge key={id} className='px-3'>
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className='my-10 sm:my-12 lg:my-14'>
        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <div className='w-full'>
            <h3 className='text-xl font-semibold tracking-tight'>Drinks</h3>
            <Separator className='my-3' />
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
              {detailRestaurant?.menus.drinks.slice(0, 12).map((drink, id) => (
                <Card
                  key={id}
                  className='cursor-default transition-all hover:bg-secondary'>
                  <CardContent className='flex items-center gap-2'>
                    <GlassWater size={16} />
                    <span className='text-xs font-medium leading-none'>
                      {drink.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className='w-full'>
            <h3 className='text-xl font-semibold tracking-tight'>Foods</h3>
            <Separator className='my-3' />
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
              {detailRestaurant?.menus.foods.slice(0, 12).map((food, id) => (
                <Card
                  key={id}
                  className='cursor-default transition-all hover:bg-secondary'>
                  <CardContent className='flex items-center gap-2'>
                    <Pizza size={16} />
                    <span className='text-xs font-medium leading-none'>
                      {food.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageContainer>
  )
}
