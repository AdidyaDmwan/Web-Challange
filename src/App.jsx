import Hero from "./components/Hero";
import Bestseller from "./components/Bestseller";
import Navbar from "./components/Navbar";
import Ourchef from "./components/Ourchef";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <body className="min-h-screen bg-primary ">
        <Navbar />
        <main>
          <Hero />
          <Bestseller />
          <Ourchef />
          <Footer />
        </main>
      </body>
    </>
  )
}

export default App