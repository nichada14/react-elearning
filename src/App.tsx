import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NavbarBanner from "./components/NavbarBanner"
import NumberCounter from "./components/NumberCounter"
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
    </main>
  )
}

export default App