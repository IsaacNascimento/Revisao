import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RickMorty from '../pages/RickMorty'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RickMorty/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default routes;