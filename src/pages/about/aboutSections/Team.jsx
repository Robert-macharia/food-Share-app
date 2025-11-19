import React from 'react'

const Team = ({ members = [] }) => {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold text-gray-700 text-center mb-6">Meet The Team</h2>
      <div className="flex justify-center gap-8">
        {members.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-md">
              <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-sm font-semibold">{m.name}</div>
            <div className="text-xs text-gray-500">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
