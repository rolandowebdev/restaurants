import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, Home } from '@/pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:restaurantId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
