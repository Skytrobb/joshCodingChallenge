import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx'
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css'

const theme = createTheme({  
  typography: {
    fontFamily: 
      "Lato",
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: "24px"
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ ThemeProvider>
  </React.StrictMode>,
)
