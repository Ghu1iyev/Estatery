import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styled/global.css'
import { PropertyProvider } from './context/contextProperties.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PropertyProvider>
    <App />
    </PropertyProvider>
  </React.StrictMode>,
)
