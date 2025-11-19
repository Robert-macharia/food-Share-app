import Gallery from './productDetailedSections/Gallery'
import InfoPanel from './productDetailedSections/InfoPanel'
import DonorCard from './productDetailedSections/DonorCard'
import ActionBar from './productDetailedSections/ActionBar'
import data from './mockdata'

const ProductDetailed = () => {
  const item = data.item

  return (
    <div className="min-h-screen bg-[#f6f5e8] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-4">Home / Listings / <span className="text-gray-900">{item.title}</span></nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Gallery images={item.images} />
          </div>

          <aside>
            <InfoPanel item={item} />
            <DonorCard donor={item.donor} />
          </aside>
        </div>

        <ActionBar />
      </div>
    </div>
  )
}

export default ProductDetailed
