import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DataContextProvider from './context/DataContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import App from "./Pages/App";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute'

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/App",
    element: (
      <ProtectedRoute>
        <App /> 
      </ProtectedRoute>
    )
  },
  {
    path: "/LogIn",
    element: <LogIn />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
])


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
        <DataContextProvider>
          <RouterProvider router={router} />
        </DataContextProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
