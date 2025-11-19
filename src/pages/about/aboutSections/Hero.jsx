import React from 'react'

const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
          <div className="relative">
            <img src={image} alt="about hero" className="w-full h-64 sm:h-80 object-cover block rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 flex items-center justify-center p-6">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">{title}</h1>
                <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
