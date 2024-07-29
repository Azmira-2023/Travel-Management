import Container from "../shared/container/Container"
import Hero from "./banner/Hero"
import Slider from "./banner/Slider"
import Country from "./country/Country"
import Testimonial from "./testimonial/Testimonial"
import WhyUs from "./whyus/WhyUs"





const Home = () => {
  return (
   <Container>
    {/* <Hero /> */}
    <Slider />
    <Country />
    
    <WhyUs />
    <Testimonial />

   </Container>
  )
}

export default Home