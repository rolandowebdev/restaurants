import '@/index.css'
import '@fontsource/plus-jakarta-sans'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientRootProvider } from '@/components'
import { App } from '@/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientRootProvider>
      <App />
    </QueryClientRootProvider>
  </React.StrictMode>
)
