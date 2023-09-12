import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styled/global.css'
import { PropertyProvider } from './context/contextProperties.tsx'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <PropertyProvider>
    <App />
    </PropertyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
