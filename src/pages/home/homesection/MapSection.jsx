import mapImg from '../../../assets/world-map.png'

const MapSection = ({ map = {} }) => {
  return (
    <section className="mt-8">
      <div className="bg-emerald-50 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Collective Impact</h3>
        <div className="w-full h-64 bg-white rounded-md relative overflow-hidden border border-green-50">
          {/* static map image occupying full container */}
          <img src={mapImg} alt="world map" className="absolute inset-0 w-full h-full object-cover" />

          {/* optional overlay content (kept on top) */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center bg-white/80 rounded-md px-4 py-2">
              <div className="text-3xl font-bold text-emerald-700">{map.count}</div>
              <div className="text-sm text-gray-500">people reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
