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
