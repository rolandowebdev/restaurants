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
    <header className='mx-auto max-w-6xl px-8 pt-4 xl:px-0'>
      <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Restaurants
      </h1>
      <p className='w-10/12 leading-7 [&:not(:first-child)]:mt-6'>
        Indulge in a world of flavors at our restaurant website. Discover
        diverse menus, trends, and join a community passionate about exceptional
        dining experiences. Join us in savoring the essence of culinary
        artistry.
      </p>
      <Separator className='my-4' />
      <nav className='flex items-center justify-between'>
        <div className='flex flex-wrap items-center gap-3'>
          <small className='text-sm font-medium leading-none'>
            Filter by :
          </small>
          <Combobox
            options={restaurantOptions}
            onSelect={handleSelectName}
            placeholderText='Restaurant'
          />
          <Combobox
            options={cityOptions}
            onSelect={handleSelectCity}
            placeholderText='City'
          />
          <Combobox
            options={ratingOptions}
            onSelect={handleSelectRating}
            placeholderText='Rating'
          />
          <Combobox
            options={alphabeticallyOptions}
            onSelect={handleSelectAlphabetically}
            placeholderText='Alphabetically'
          />
        </div>
        <Button
          onClick={clearFilters}
          variant={checkIfUserHasFilter() ? 'outline' : 'destructive'}
          disabled={checkIfUserHasFilter()}>
          Clear All
        </Button>
      </nav>
    </header>
  )
}
