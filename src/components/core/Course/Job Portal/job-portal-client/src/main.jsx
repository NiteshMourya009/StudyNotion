import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import router from './_Router/_Router.jsx'
import {RouterProvider} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} /> ,
)  