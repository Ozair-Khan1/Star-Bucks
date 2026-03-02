import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Home } from './Home.jsx'
import { Reward } from './Components/Reward.jsx'
import { GiftCard } from './Components/GiftCard.jsx'
import { Menu } from './Components/Menu.jsx'
import { Cart } from './Components/Cart.jsx'
import { CartProvider } from './Data/CartReducer.jsx'
import { Navbar } from './Components/Navbar.jsx'
import { Featured } from './Components/Featured.jsx'
import { SignUp } from './Components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Navbar />,
    children : [
      {
        index : true,
        element : <Navigate to='/Home' replace />
      },
      {
        path : "Home",
        element : <Home/>
      },
      {
        path : "Reward",
        element : <Reward/>
      },
      {
        path : "menu",
        element : <Menu/>
      },
      {
        path : "GiftCard",
        element : <GiftCard/>
      },
      {
        path : "Featured",
        element : <Featured/>
      },
    ],
  },
  {
    path : 'Cart',
    element : <Cart/>
  },
  {
    path : 'SignUp',
    element : <SignUp/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
  </StrictMode>,
)
