import { Restaurant, Review } from '@/types'
import { useState } from 'react'

type useLoadMoreProps = {
  items: Restaurant[] | Review[] | undefined
  step?: number
}

export const useLoadMore = ({ items, step = 4 }: useLoadMoreProps) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [indexItem, setIndexItem] = useState(step)

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
