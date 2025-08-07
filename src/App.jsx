import React from 'react'
import AppRouter from './routes/router'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
    <AppRouter/>
    </ParallaxProvider>
  )

}

export default App