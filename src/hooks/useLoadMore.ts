import { Restaurant } from '@/types'
import { useState } from 'react'

export const useLoadMore = (
  items: Restaurant[] | undefined,
  step: number = 4
) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const [indexItem, setIndexItem] = useState<number>(step)

  const loadMore = () => {
    if (!items) return

    const newIndex = indexItem + step

    if (newIndex >= items.length) {
      setIsCompleted(true)
      setIndexItem(items.length)
    } else {
      setIsCompleted(false)
      setIndexItem(newIndex)
    }
  }

  return { isCompleted, indexItem, loadMore }
}
