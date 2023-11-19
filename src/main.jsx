import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

import './custom-style.css'

import App from './App.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import About from './Pages/About.jsx'
import Careers from './Pages/Careers.jsx'
import Developers from './Pages/Developers.jsx'
import ErrorPage from './components/Error.jsx'
import Exterior from './Pages/Exterior.jsx'
import Interior from './Pages/Interior.jsx'
import Homes from './Pages/Homes.jsx'
import HomesLinks from './components/HomesLinks.jsx/index.jsx'
import Info from './components/HomesLinks.jsx/info.jsx'
import InteriorLinks from './components/InteriorLinks.jsx/index.jsx'
import InteriorInfo from './components/InteriorLinks.jsx/InteriorInfo.jsx'
import ExteriorLinks from './components/ExteriorLinks.jsx/index.jsx'
import ExteriorInfo from './components/ExteriorLinks.jsx/ExteriorInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'developers',
        element: <Developers />
      },
      {
        path: 'careers',
        element: <Careers />
      },
      {
        path: 'homes',
        element: <Homes />
      },
      {
        path: 'interior',
        element: <Interior />
      },
      {
        path: 'exterior',
        element: <Exterior />
      },
      {
        path: 'homes-photo-gallery',
        element: <HomesLinks />
      },
      {
        path: 'homes-info',
        element: <Info />
      },
      {
        path: 'interior-photo-gallery',
        element: <InteriorLinks />
      },
      {
        path: 'interior-info',
        element: <InteriorInfo />
      },
      {
        path: 'exterior-photo-gallery',
        element: <ExteriorLinks />
      },
      {
        path: 'exterior-info',
        element: <ExteriorInfo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
