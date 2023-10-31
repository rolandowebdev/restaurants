import { RestaurantDetailsResponse } from '@/types'
import { axiosInstance } from '@/lib'
import { useQuery } from '@tanstack/react-query'

type RestaurantDetailProps = {
  id: string | undefined
}

export const useDetailRestaurant = ({ id }: RestaurantDetailProps) => {
  const fetchRestaurant = async (): Promise<RestaurantDetailsResponse> => {
    if (!id) throw new Error('No ID provided for fetching restaurant details')

    const response = await axiosInstance.get(`/detail/${id}`)
    return response.data
  }

  return useQuery<RestaurantDetailsResponse, Error>({
    queryKey: ['detail-restaurant', id],
    queryFn: fetchRestaurant
  })
}
