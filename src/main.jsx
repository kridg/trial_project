import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './router/AppRouter.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <div className='bg-gray-200 h-full'>
      <Toaster position='top-right'/>
      <AppRouter />
    </div>
    </AuthProvider>
    </Provider>,
  </StrictMode>,
)
