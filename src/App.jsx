import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Sobre } from './pages/Sobre'
import { Experiencia } from './pages/Experiencia'

import { Formacao } from './pages/Formacao';
import { Hobbies } from './pages/Hobbies';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/formacao" element={<Formacao />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
