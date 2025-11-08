import Hero from './homesection/Hero'
import Cards from './homesection/Cards'
import MapSection from './homesection/MapSection'
import Values from './homesection/Values'
import Testimonials from './homesection/Testimonials'
import homeData from './mockdata/data'

const Home = () => {
  return (
    <main className="bg-green-50 min-h-screen text-gray-800">
      <Hero stats={homeData.stats} story={homeData.story} />
      <div className="max-w-6xl mx-auto px-6 -mt-16">
        <Cards items={homeData.cards} />
        <MapSection map={homeData.map} />
        <Values items={homeData.values} />
        <Testimonials items={homeData.testimonials} />
      </div>
    </main>
  )
}

export default Home