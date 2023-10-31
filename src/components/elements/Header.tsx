import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator
} from '..'

export const Header = () => {
  return (
    <header className='mx-auto max-w-6xl px-4 pt-4 lg:px-0'>
      <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Restaurants
      </h1>
      <p className='w-10/12 leading-7 [&:not(:first-child)]:mt-6'>
        Explore restaurants, find the perfect spot, stay updated on food trends,
        and connect with fellow foodies. Join us on a flavorful journey
        celebrating the art of dining!
      </p>
      <Separator className='my-4' />
      <nav className='flex items-center justify-between'>
        <div className='flex flex-wrap items-center gap-3'>
          <small className='text-sm font-medium leading-none'>
            Filter by :
          </small>
          <Select>
            <SelectTrigger className='w-40'>
              <SelectValue placeholder='Restaurant name' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>A-Z</SelectItem>
              <SelectItem value='dark'>Z-A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-40'>
              <SelectValue placeholder='Alphabetical' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>A-Z</SelectItem>
              <SelectItem value='dark'>Z-A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-40'>
              <SelectValue placeholder='City' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>A-Z</SelectItem>
              <SelectItem value='dark'>Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant='outline'>Clear All</Button>
      </nav>
    </header>
  )
}
