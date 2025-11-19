import React, { useState } from 'react'

const Gallery = ({ images = [] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <div>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
        <img src={main} alt="main" className="w-full h-96 object-cover" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        {images.map((src, i) => (
          <button key={i} onClick={() => setMain(src)} className="w-20 h-20 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery
