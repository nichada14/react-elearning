import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NavbarBanner from "./components/NavbarBanner"
import NumberCounter from "./components/NumberCounter"
import SubjectCard from "./components/SubjectCard"
import Testimonial from "./components/Testimonial"
import WhyChooseUs from "./components/WhyChooseUs"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default App