import About from "./Components/About"
import  Navbar from"./Components/Navbar"
import Home from "./Components/Home"
import Blog from "./Components/Blog"
import Portfoli from"./Components/Portfolio"
import Carousel from "./Components/Carousel"
import Contact from"./Components/Contact"
import Footer from "./Components/Footer"
function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer/>
      <Blog/>
      <Portfoli/>
      <Carousel/>
      <Contact/>
      


    </div>

  )
}

export default App