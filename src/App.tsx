import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, Home, NotFound } from '@/pages'
import { Footer, Toaster } from '@/components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail/:restaurantId' element={<Detail />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  )
}
