import About from '../Home/About'
import Blog from '../Home/Blog'
import CaseStudies from '../Home/CaseStudies'
import Choice from '../Home/Choice'
import Custom from '../Home/Custom'
import Hero from '../Home/Hero'
import Logos from '../Home/Logos'
import Marketing from '../Home/Marketing'
import Numbers from '../Home/Numbers'
import Testimonils from '../Home/Testimonils'
import Navbar from '../Navbar/Navbar'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Logos/>
    <About/>
    <Marketing/>
    <Custom/>
    <CaseStudies/>
    <Choice/>
    <Numbers/>
    <Testimonils/>
    <Blog/>
    </>
  )
}

export default HomePage