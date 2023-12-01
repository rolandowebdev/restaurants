import {
  alphabeticallyOptions,
  cityOptions,
  ratingOptions,
  restaurantOptions
} from '@/constants'
import { Button, Combobox, Separator } from '../..'
import { SetURLSearchParams } from 'react-router-dom'
import { URLSearchParams } from 'url'

type HeaderProps = {
  filterParams: {
    city: string
    name: string
    alphabetically: string
    rating: string
  }
  searchParams: URLSearchParams
  setSearchParams: SetURLSearchParams
}

export const Header = ({
  filterParams,
  searchParams,
  setSearchParams
}: HeaderProps) => {
  const clearFilters = () => {
    setSearchParams('')
  }

  const checkIfUserHasFilter = () => {
    const { name, city, alphabetically, rating } = filterParams
    return (
      name === '' &&
      city === '' &&
      Number(rating) === 0 &&
      alphabetically === ''
    )
  }

  const handleSelectCity = (value: string) => {
    searchParams.set('city', value)
    setSearchParams(searchParams)
  }

  const handleSelectRating = (value: string) => {
    searchParams.set('rating', value)
    setSearchParams(searchParams)
  }

  const handleSelectAlphabetically = (value: string) => {
    searchParams.set('alphabetically', value)
    setSearchParams(searchParams)
  }

  const handleSelectName = (value: string) => {
    searchParams.set('name', value)
    setSearchParams(searchParams)
  }

  return (
    <header className='mx-auto max-w-6xl px-4 pt-4 lg:px-8 xl:px-0'>
      <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Restaurants
      </h1>
      <p className='leading-7 lg:w-3/4 [&:not(:first-child)]:mt-6'>
        Welcome! Explore diverse menus, culinary trends, and join a passionate
        community celebrating exceptional dining experiences. Savor the artistry
        of flavors and culinary excellence with us.
      </p>
      <Separator className='my-4' />
      <nav className='flex flex-col items-center justify-between gap-3 lg:flex-row'>
        <div className='flex w-full'>
          <div className='flex w-full flex-col items-center gap-3 lg:flex-row'>
            <small className='min-w-fit text-left text-sm font-medium leading-none'>
              Filter by :
            </small>
            <Combobox
              className='w-full justify-start lg:w-[200px] lg:justify-center'
              options={restaurantOptions}
              onSelect={handleSelectName}
              placeholderText='Restaurant'
            />
            <Combobox
              className='w-full justify-start lg:w-[200px] lg:justify-center'
              options={cityOptions}
              onSelect={handleSelectCity}
              placeholderText='City'
            />
            <Combobox
              className='w-full justify-start lg:w-[200px] lg:justify-center'
              options={ratingOptions}
              onSelect={handleSelectRating}
              placeholderText='Rating'
            />
            <Combobox
              className='w-full justify-start lg:w-[200px] lg:justify-center'
              options={alphabeticallyOptions}
              onSelect={handleSelectAlphabetically}
              placeholderText='Alphabetically'
            />
          </div>
        </div>
        <Button
          onClick={clearFilters}
          className='w-full lg:w-fit'
          variant={checkIfUserHasFilter() ? 'outline' : 'destructive'}
          disabled={checkIfUserHasFilter()}>
          Clear Filter
        </Button>
      </nav>
    </header>
  )
}
