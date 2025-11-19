import React from 'react'

const CTA = () => {
  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl p-8 shadow-md">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Join Our Movement</h3>
          <p className="text-sm text-gray-600 mb-6">Be part of the solution. Sign up to start sharing or hosting community food events.</p>
          <div>
            <a href="/register" className="inline-block bg-[#1f7a4a] text-white px-6 py-2 rounded-full font-medium">Join Our Community</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
