import {
  Badge,
  Button,
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
import { useLoadMore, useRestaurant } from '@/hooks'
import { Restaurant } from '@/types'
import { FishOff } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

const handleFilterRestaurant = (
  restaurants: Restaurant[],
  searchParams: URLSearchParams
) => {
  const filterParams = {
    city: searchParams.get('city')?.toLowerCase() ?? '',
    name: searchParams.get('name')?.toLowerCase() ?? '',
    alphabetically: searchParams.get('alphabetically')?.toLowerCase() ?? '',
    rating: searchParams.get('rating') ?? ''
  }

  const filterByCity = restaurants.filter((restaurant) =>
    restaurant.city.toLowerCase().includes(filterParams.city)
  )

  const filterByName = filterByCity.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filterParams.name)
  )

  const filterByAlphabet = filterByName.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const filterByRating = filterByAlphabet.filter(
    (restaurant) => restaurant.rating >= Number(filterParams.rating)
  )

  return filterByRating
}

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: listRestaurant, isLoading } = useRestaurant()

  const filterRestaurant = handleFilterRestaurant(
    listRestaurant?.restaurants || [],
    searchParams
  )

  const { indexItem, isCompleted, loadMore } = useLoadMore({
    items: filterRestaurant
  })

  const filterParams = {
    city: searchParams.get('city')?.toLowerCase() ?? '',
    name: searchParams.get('name')?.toLowerCase() ?? '',
    alphabetically: searchParams.get('alphabetically')?.toLowerCase() ?? '',
    rating: searchParams.get('rating') ?? ''
  }

  const initialListRestaurant = filterRestaurant?.slice(0, indexItem)
  const isShowLoadMore =
    !(filterParams.city || filterParams.rating || isCompleted) &&
    initialListRestaurant?.length > 1

  return (
    <>
      <Header
        filterParams={filterParams}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <PageContainer>
        <h2 className='border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0'>
          All Restaurants
        </h2>
        {initialListRestaurant && initialListRestaurant.length > 0 ? (
          <section className='my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {initialListRestaurant.map((restaurant) => (
              <Card key={restaurant.id} className='p-3'>
                <CardHeader className='h-48'>
                  <img
                    className='h-full w-full rounded-md object-cover'
                    src={`${RestaurantsApiUrl.imageUrl}/${restaurant.pictureId}`}
                    alt={restaurant.name}
                  />
                </CardHeader>
                <CardContent className='py-3'>
                  <CardTitle className='mb-1'>{restaurant.name}</CardTitle>
                  <RatingStar rating={restaurant.rating} />
                  <CardDescription className='mt-2'>{`${restaurant.description.slice(
                    0,
                    95
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
          </section>
        ) : isLoading ? (
          <section className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {Array.from({ length: 4 }, (_, index) => (
              <CardSkeleton key={index} />
            ))}
          </section>
        ) : (
          <div className='my-12 flex w-full flex-col items-center gap-2'>
            <FishOff size={100} className='text-zinc-800' />
            <h3 className='text-xl font-semibold'>Pretty empty around here</h3>
            <p>List of restaurant is empty.</p>
          </div>
        )}
        {isShowLoadMore ? (
          <Button
            onClick={loadMore}
            className='mx-auto block w-40'
            variant='outline'>
            Load More
          </Button>
        ) : null}
      </PageContainer>
    </>
  )
}
