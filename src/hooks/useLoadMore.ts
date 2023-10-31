import { RestaurantResponse } from '@/types'
import { useState } from 'react'

export const useLoadMore = (
  items: RestaurantResponse | undefined,
  step: number = 4
) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [indexItem, setIndexItem] = useState(step)

  const handleLoadMore = () => {
    if (!items) return

    const newIndex = indexItem + step

    if (newIndex >= items.restaurants.length) {
      setIsCompleted(true)
      setIndexItem(items.restaurants.length)
    } else {
      setIsCompleted(false)
      setIndexItem(newIndex)
    }
  }

  return { isCompleted, indexItem, handleLoadMore }
}
