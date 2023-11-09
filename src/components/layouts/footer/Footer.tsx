import { ChefHat } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mx-auto mb-8 mt-20 flex max-w-6xl flex-col items-center gap-12 border-t px-4 pt-10 lg:px-8 xl:px-0'>
      <div className='flex w-full flex-col gap-10 lg:flex-row lg:justify-between'>
        <div className='flex flex-1 flex-col gap-2'>
          <ChefHat className='h-10 w-10 text-primary lg:h-8 lg:w-8 xl:h-10 xl:w-10' />
          <p className='w-[80%] text-lg font-bold'>
            Find your favorite food here and taste the unforgettable delicacy.
          </p>
        </div>
        <div className='flex-2 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col gap-2'>
            <h4 className='font-bold'>Service</h4>
            <ul className='flex flex-col gap-2'>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Online Order
              </li>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Pre Reservation
              </li>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Dinner & Lunch
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='font-bold'>Explore Us</h4>
            <ul className='flex flex-col gap-2'>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Privacy
              </li>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Our Outlets
              </li>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='font-bold'>Contact Us</h4>
            <ul className='flex flex-col gap-2'>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                Support @restaurants.id
              </li>
              <li className='w-fit cursor-pointer text-muted-foreground hover:underline'>
                021-345-5675
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>© {currentYear} Restaurants • All Rights Reserved</p>
    </footer>
  )
}
