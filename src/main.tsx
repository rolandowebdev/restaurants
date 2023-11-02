import '@/index.css'
import '@fontsource/plus-jakarta-sans'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer, QueryClientRootProvider, Toaster } from '@/components'
import { App } from '@/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientRootProvider>
        <App />
        <Toaster />
        <Footer />
      </QueryClientRootProvider>
    </BrowserRouter>
  </React.StrictMode>
)
