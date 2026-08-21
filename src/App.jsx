import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SiteLayout from './components/SiteLayout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(loadingTimer)
  }, [])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <BrowserRouter basename="/portfolio-react/">
      <ScrollToTop />
      <SiteLayout theme={theme} onThemeToggle={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App
