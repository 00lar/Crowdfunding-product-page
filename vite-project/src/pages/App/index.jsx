import './App.css'
import { PageContextProvider } from '../../Context'
import { Home } from '../Home'

import React from 'react'

function App() {

  return (
    <PageContextProvider>
      <Home></Home>
    </PageContextProvider>
  )
}

export default App
