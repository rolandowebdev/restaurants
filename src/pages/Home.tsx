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
import { GhostIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [filterName, setFilterName] = useState<string>('')
  const [filterCity, setFilterCity] = useState<string>('')
  const [filterAlphabetically, setFilterAlphabetically] = useState<string>('')
  const [filterRating, setFilterRating] = useState<number>(0)

  const { data: listRestaurant, isLoading } = useRestaurant()
  const filterListRestaurant = listRestaurant?.restaurants || []

  const filterByCity = filterListRestaurant.filter((restaurant) =>
    restaurant.city.toLowerCase().includes(filterCity.toLowerCase())
  )

  const filterByName = filterByCity.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filterName.toLowerCase())
  )

  const filterByAlphabet =
    filterAlphabetically === 'a-z'
      ? filterByName.sort((a, b) => a.name.localeCompare(b.name))
      : filterByName.sort((a, b) => b.name.localeCompare(a.name))

  const filterByRating = filterByAlphabet.filter(
    (restaurant) => restaurant.rating >= filterRating
  )

  const { indexItem, isCompleted, loadMore } = useLoadMore(filterByAlphabet)

  const initialListRestaurant = filterByRating?.slice(0, indexItem)

  return (
    <>
      <Header
        filterName={filterName}
        filterCity={filterCity}
        filterRating={filterRating}
        filterAlphabetically={filterAlphabetically}
        setFilterName={setFilterName}
        setFilterCity={setFilterCity}
        setFilterRating={setFilterRating}
        setFilterAlphabetically={setFilterAlphabetically}
      />
      <PageContainer>
        <h2 className='border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0'>
          All Restaurants
        </h2>
        {initialListRestaurant && initialListRestaurant.length > 0 ? (
          <section className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
            <GhostIcon className='h-8 w-8 text-zinc-800' />
            <h3 className='text-xl font-semibold'>Pretty empty around here</h3>
            <p>List of restaurant is empty.</p>
          </div>
        )}
        {!filterCity &&
        !filterRating &&
        !isCompleted &&
        initialListRestaurant?.length > 1 ? (
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
