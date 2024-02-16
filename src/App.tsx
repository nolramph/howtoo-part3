import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

//components
import Nav from "./components/nav"
import Home from "./pages/home"
import HomeTopics from "./pages/hometopics"
import AccordionPage from "./pages/accordion"
import HamburgerMenu, { HamburgerWrapper } from "./components/mobile-nav"

const App = () => {
  const NavWrapper = () => {
    const location = useLocation()

    if (location.pathname === "/accordion") {
      return <HamburgerMenu />
    }

    return (
      <>
        <HamburgerWrapper>
          <HamburgerMenu />
        </HamburgerWrapper>
        <Nav />
      </>
    )
  }
  return (
    <Router>
      <NavWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hometopics" element={<HomeTopics />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Routes>
    </Router>
  )
}

export default App
