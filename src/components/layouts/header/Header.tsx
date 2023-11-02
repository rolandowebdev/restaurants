import {
  alphabeticallyOptions,
  cityOptions,
  ratingOptions,
  restaurantOptions
} from '@/constants'
import { Button, Combobox, Separator } from '../..'

type HeaderProps = {
  filterName: string
  filterCity: string
  filterRating: number
  filterAlphabetically: string
  setFilterName: React.Dispatch<React.SetStateAction<string>>
  setFilterCity: React.Dispatch<React.SetStateAction<string>>
  setFilterRating: React.Dispatch<React.SetStateAction<number>>
  setFilterAlphabetically: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({
  filterName,
  filterCity,
  filterRating,
  filterAlphabetically,
  setFilterName,
  setFilterCity,
  setFilterRating,
  setFilterAlphabetically
}: HeaderProps) => {
  const clearFilters = () => {
    setFilterName('')
    setFilterCity('')
    setFilterRating(0)
    setFilterAlphabetically('')
  }

  const checkIfUserHasFilter = () => {
    return (
      filterName === '' &&
      filterCity === '' &&
      filterRating === 0 &&
      filterAlphabetically === ''
    )
  }

  const handleSelectCity = (value: string) => {
    setFilterCity(value)
  }

  const handleSelectRating = (value: string) => {
    setFilterRating(Number(value))
  }

  const handleSelectAlphabetically = (value: string) => {
    setFilterAlphabetically(value)
  }

  const handleSelectName = (value: string) => {
    setFilterName(value)
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
