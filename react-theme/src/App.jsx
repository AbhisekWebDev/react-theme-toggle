import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCards from './components/InfoCards'
import Footer from './components/Footer'
import Child from './components/Child'
import ThemeProvider from './ThemeProvider'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Child /> {/* Theme toggle is now part of main page */}
              <Hero />
              <InfoCards />
            </>
          } />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
