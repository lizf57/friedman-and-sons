import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

import App from './App.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Developers from './components/Developers.jsx'
import Careers from './components/Careers.jsx'
import ErrorPage from './components/Error.jsx'

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
        path: 'services',
        element: <Services />
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
