import './App.css';
import LandingPage from './sections/LandingPage'
import About from './sections/About'
import Skills from './sections/Skills'
import Timeline from './sections/Timeline'
import Projects from './sections/Projects'
import WrapAround from './sections/WrapAround'

import { AudioProvider } from './contexts/AudioContext'
import { ScrollProvider } from './contexts/ScrollContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <AudioProvider>
      <ScrollProvider>
        <BrowserRouter >
          <div className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/wrap-around" element={<WrapAround />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ScrollProvider>
    </AudioProvider>
  )
}


export default App
