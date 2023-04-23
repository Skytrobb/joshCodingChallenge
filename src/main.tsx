import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx'
import RoverListing from './pages/RoverListing.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NewerCard } from './components/NewerCard.tsx'
import './index.css'

const theme = createTheme({  
  typography: {
    fontFamily: 
      "Lato",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoverListing />,
  },
  {
    path: "/tinker",
    element: <NewerCard />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ ThemeProvider>
  </React.StrictMode>,
)
