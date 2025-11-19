import React from 'react'
import Filters from './foodNearYouSections/Filters'
import Header from './foodNearYouSections/Header'
import CardsGrid from './foodNearYouSections/CardsGrid'
import data from './mockdata'

const FoodNearYou = () => {
  return (
    <div className="min-h-screen bg-[#f6f5e8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="hidden lg:block">
            <Filters />
          </aside>

          <section className="lg:col-span-3">
            <CardsGrid items={data.items} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default FoodNearYou
