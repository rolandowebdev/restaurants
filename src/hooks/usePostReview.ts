import { queryClient } from '@/components'
import { axiosInstance } from '@/lib'
import { useMutation } from '@tanstack/react-query'

type Review = {
  name: string
  review: string
}

export const usePostReview = ({ name, review }: Review) => {
  const postReview = async () => {
    return await axiosInstance.post(
      '/review',
      {
        id: String(new Date().valueOf()),
        name,
        review
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  }

  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detail-restaurant'] })
    }
  })
}
