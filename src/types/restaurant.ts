export type Restaurant = {
  id: string
  name: string
  description: string
  pictureId: string
  city: string
  rating: number
}

export type RestaurantResponse = {
  error: boolean
  message: string
  count: number
  restaurants: Restaurant[]
}

type Category = {
  name: string
}

type MenuItem = {
  name: string
}

type CustomerReview = {
  name: string
  review: string
  date: string
}

type RestaurantDetails = {
  id: string
  name: string
  description: string
  city: string
  address: string
  pictureId: string
  categories: Category[]
  menus: {
    foods: MenuItem[]
    drinks: MenuItem[]
  }
  rating: number
  customerReviews: CustomerReview[]
}

export type RestaurantDetailsResponse = {
  error: boolean
  message: string
  restaurant: RestaurantDetails
}

export type Review = {
  id?: string
  name: string
  review: string
}
