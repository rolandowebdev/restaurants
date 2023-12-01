import { Route, Routes, useLocation } from 'react-router-dom'
import { Detail, Home, NotFound } from '@/pages'
import { useEffect } from 'react'

export const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/:restaurantId' element={<Detail />} />
    </Routes>
  )
}
