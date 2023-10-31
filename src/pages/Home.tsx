import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Header,
  buttonVariants
} from '@/components'
import { RestaurantsApiUrl } from '@/constants'
import { useRestaurant } from '@/hooks'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { data: listRestaurant } = useRestaurant()
  return (
    <>
      <Header />
      <main className='mx-auto my-8 max-w-6xl px-4 pt-4 lg:px-0'>
        <h2 className='border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0'>
          All Restaurants
        </h2>

        <section className='mt-8 grid grid-cols-4 gap-4'>
          {listRestaurant?.restaurants.slice(0, 6).map((restaurant) => (
            <Card>
              <CardHeader className='h-48'>
                <img
                  className='h-full w-full rounded-md object-cover'
                  src={`${RestaurantsApiUrl.imageUrl}/${restaurant.pictureId}`}
                  alt={restaurant.name}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{restaurant.name}</CardTitle>
                <CardDescription className='mt-2'>
                  {`${restaurant.description.slice(0, 120)}...`}
                </CardDescription>
              </CardContent>
              <CardFooter className='flex justify-between'>
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
        </section>
      </main>
    </>
  )
}
