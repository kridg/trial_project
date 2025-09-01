import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './router/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-200 h-screen'>
      <AppRouter />
    </div>
  </StrictMode>,
)
