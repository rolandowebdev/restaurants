import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardSkeleton,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ImageContainer,
  Input,
  PageContainer,
  RatingStar,
  Separator,
  Textarea,
  buttonVariants,
  queryClient
} from '@/components'
import { RestaurantsApiUrl } from '@/constants'
import { useDetailRestaurant, useLoadMore, useToast } from '@/hooks'
import { axiosInstance, cn } from '@/lib'
import { Review } from '@/types'
import { reviewSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useMutation } from '@tanstack/react-query'
import { FishOff, GlassWater, Loader2, Pizza } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import * as z from 'zod'

export const Detail = () => {
  const { toast } = useToast()
  const { restaurantId } = useParams()
  const { data, isLoading } = useDetailRestaurant({
    id: restaurantId
  })

  const restaurant = data?.restaurant

  const { indexItem, loadMore } = useLoadMore({
    items: restaurant?.customerReviews,
    step: 3
  })

  const initialListReviews = restaurant?.customerReviews?.slice(0, indexItem)

  const reviewForm = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      id: restaurantId,
      name: '',
      review: ''
    }
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (newReview: Review) => {
      return axiosInstance.post('/review', newReview, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['detail-restaurant', restaurantId]
      })
    }
  })

  const onSubmitReview = (values: z.infer<typeof reviewSchema>) => {
    mutate(values)
    toast({
      title: 'Success',
      description: 'Your review has been added ✅️'
    })
    reviewForm.reset()
  }

  if (isLoading) {
    return (
      <PageContainer>
        <CardSkeleton />
        <CardSkeleton />
      </PageContainer>
    )
  }

  return (
    <PageContainer
      className={cn(
        !restaurant
          ? 'flex h-[calc(100vh-64px)] items-center justify-center'
          : ''
      )}>
      {!restaurant ? (
        <div className='my-12 flex w-full flex-col items-center gap-2'>
          <FishOff size={150} className='text-zinc-800' />
          <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Restaurant not found
          </h1>
          <p className='leading-3 [&:not(:first-child)]:mt-3'>
            The restaurant you are looking for does not exist
          </p>
          <Link
            to='/'
            className={buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'mt-4'
            })}>
            Back to home
          </Link>
        </div>
      ) : (
        <>
          <div className='flex flex-col-reverse items-center md:flex-row'>
            <Link
              to='/'
              className={buttonVariants({
                variant: 'outline',
                className:
                  'z-10 mt-4 flex flex-shrink items-center gap-1 text-[16px] md:mt-0'
              })}>
              Back to Home
            </Link>
            <div className='flex-1 text-center'>
              <h1 className='mb-3 text-4xl font-extrabold tracking-tight md:-ml-[100px] lg:text-5xl'>
                {restaurant?.name}
              </h1>
              <span className='leading-7 md:-ml-[100px] [&:not(:first-child)]:mt-6'>
                {restaurant?.address}
              </span>
            </div>
          </div>

          <article className='my-10 sm:my-12 lg:my-14'>
            <div className='grid grid-cols-1 gap-10 xl:grid-cols-2'>
              <ImageContainer>
                <img
                  className='h-full w-full rounded-lg object-cover'
                  src={`${RestaurantsApiUrl.imageUrl}/${restaurant?.pictureId}`}
                  alt=''
                />
              </ImageContainer>
              <div>
                <div className='flex flex-wrap items-center gap-3'>
                  <h2 className='text-3xl font-semibold tracking-tight first:mt-0'>
                    {restaurant?.name}
                  </h2>
                  <RatingStar rating={restaurant?.rating as number} />
                </div>
                <p className='mb-2 leading-7 text-zinc-500 [&:not(:first-child)]:mt-6'>
                  {restaurant?.description}
                </p>
                <div className='mt-4 flex items-center gap-1'>
                  {restaurant?.categories.map((category, id) => (
                    <Badge key={id} className='px-3'>
                      {category.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className='my-10 grid grid-cols-1 gap-6 sm:my-12 lg:my-14 lg:grid-cols-2'>
            <div className='flex w-full flex-col items-center gap-4'>
              <div className='w-full'>
                <h3 className='text-2xl font-semibold tracking-tight'>
                  Drinks
                </h3>
                <Separator className='my-3' />
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                  {restaurant?.menus.drinks.map((drink, id) => (
                    <Card
                      key={id}
                      className='cursor-default transition-all hover:bg-secondary'>
                      <CardContent className='flex items-center gap-2'>
                        <GlassWater size={16} className='text-zinc-800' />
                        <span className='text-xs font-medium leading-none'>
                          {drink.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className='w-full'>
                <h3 className='text-2xl font-semibold tracking-tight'>Foods</h3>
                <Separator className='my-3' />
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                  {restaurant?.menus.foods.map((food, id) => (
                    <Card
                      key={id}
                      className='cursor-default transition-all hover:bg-secondary'>
                      <CardContent className='flex items-center gap-2'>
                        <Pizza size={16} className='text-zinc-800' />
                        <span className='text-xs font-medium leading-none'>
                          {food.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className='w-full'>
              <h3 className='text-2xl font-semibold tracking-tight'>Reviews</h3>
              <Separator className='my-3' />
              <div className='w-full'>
                <FormProvider {...reviewForm}>
                  <form
                    onSubmit={reviewForm.handleSubmit(onSubmitReview)}
                    className='space-y-3'>
                    <FormField
                      control={reviewForm.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Your name.' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={reviewForm.control}
                      name='review'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Review</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Type your review here.'
                              className='resize-none'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      disabled={isPending}
                      type='submit'
                      className='w-full'>
                      {isPending ? (
                        <Loader2 className='animate-spin' />
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </form>
                </FormProvider>

                <div className='mt-4 flex flex-col'>
                  {initialListReviews?.map((review, id) => (
                    <Card
                      key={id}
                      className='break-words border-none shadow-none'>
                      <CardContent className='flex gap-2'>
                        <Avatar className='h-8 w-8'>
                          <AvatarImage
                            src='https://github.com/shadcn.png'
                            alt='@shadcn'
                          />
                          <AvatarFallback>shadcn</AvatarFallback>
                        </Avatar>

                        <div className='flex w-full flex-col gap-2 rounded bg-muted p-3'>
                          <h4 className='flex flex-wrap items-center gap-1 text-xs text-muted-foreground'>
                            {review.name}
                            <span>•</span>
                            <span>{review.date}</span>
                          </h4>
                          <p className='text-sm'>{review.review}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {initialListReviews &&
                  initialListReviews?.length <
                    restaurant?.customerReviews?.length ? (
                    <Button
                      onClick={loadMore}
                      className='mt-3 block w-full'
                      variant='outline'>
                      Load More
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        </>
      )}
    </PageContainer>
  )
}
