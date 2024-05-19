import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Home/Home.jsx'
import Wishlist from './Wishlist/Wishlist.jsx'
import NoPage from './NoPage/NoPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishlist" element={<Home />} />
        <Route path='/wishlist/:id' element={<Wishlist />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
