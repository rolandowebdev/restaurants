import { RestaurantResponse } from '@/types'
import { axiosInstance } from '@/lib'
import { useQuery } from '@tanstack/react-query'

export const useRestaurant = () => {
  const fetchRestaurant = async (): Promise<RestaurantResponse> => {
    const response = await axiosInstance.get('/list')
    return response.data
  }

  return useQuery<RestaurantResponse, Error>({
    queryKey: ['restaurant'],
    queryFn: fetchRestaurant
  })
}
