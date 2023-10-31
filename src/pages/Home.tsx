import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardSkeleton,
  CardTitle,
  Header,
  PageContainer,
  RatingStar,
  Separator,
  buttonVariants
} from '@/components'
import { RestaurantsApiUrl } from '@/constants'
import { useRestaurant } from '@/hooks'
import { GhostIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { data: listRestaurant, isLoading } = useRestaurant()
  return (
    <>
      <Header />
      <PageContainer>
        <h2 className='border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0'>
          All Restaurants
        </h2>

        <section className='my-8 grid grid-cols-4 gap-4'>
          {listRestaurant && listRestaurant.restaurants.length > 0 ? (
            <>
              {listRestaurant?.restaurants.slice(0, 6).map((restaurant) => (
                <Card key={restaurant.id}>
                  <CardHeader className='h-48'>
                    <img
                      className='h-full w-full rounded-md object-cover'
                      src={`${RestaurantsApiUrl.imageUrl}/${restaurant.pictureId}`}
                      alt={restaurant.name}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className='mb-2'>{restaurant.name}</CardTitle>
                    <RatingStar rating={restaurant.rating} />
                    <CardDescription>{`${restaurant.description.slice(
                      0,
                      90
                    )}...`}</CardDescription>
                    <Badge variant='secondary' className='mt-3 block w-fit'>
                      {restaurant.city}
                    </Badge>
                  </CardContent>
                  <CardFooter className='flex flex-col items-start gap-3'>
                    <Separator />
                    <Link
                      to={`/${restaurant.id}`}
                      className={buttonVariants({
                        className: 'w-full cursor-pointer'
                      })}>
                      Learn More
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </>
          ) : isLoading ? (
            <>
              {Array.from({ length: 4 }, (_, index) => (
                <CardSkeleton key={index} />
              ))}
            </>
          ) : (
            <div className='mt-16 flex flex-col items-center gap-2'>
              <GhostIcon className='h-8 w-8 text-zinc-800' />
              <h3 className='text-xl font-semibold'>
                Pretty empty around here
              </h3>
              <p>List of restaurant is empty.</p>
            </div>
          )}
        </section>
      </PageContainer>
    </>
  )
}
