import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, Home } from '@/pages'
import { Toaster } from '@/components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:restaurantId' element={<Detail />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
