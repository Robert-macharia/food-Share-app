
const Sidebar = ({ conversations = [], onOpen, activeId }) => {
  return (
    <div className="h-full text-black bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg   font-semibold">Messages</h3>
      </div>


       <div className="flex-1 sm:flex-none">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
          <input className="flex-1 min-w-0 bg-transparent outline-none text-sm " placeholder="Search by username or keyword" />
          <button className="ml-3 bg-[#1f7a4a] text-white px-4 py-1 rounded-full text-sm">Search</button>
        </div>
        </div>

      <div className="flex-1 overflow-auto divide-y divide-gray-100">

        {conversations.map((c) => (
          <button key={c.id} onClick={() => onOpen(c.id)} className={`w-full text-left p-3 flex items-center gap-3 ${activeId === c.id ? 'bg-[#eaf9ef]' : 'hover:bg-gray-50'}`}>
            <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover" />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm truncate">{c.name}</div>
                <div className="text-xs text-gray-400 ml-2">{c.time}</div>
              </div>

              <div className="flex items-center justify-between mt-1">
                <div className="text-xs text-gray-500 truncate">{c.lastMessage}</div>
                {c.unread ? (
                  <div className="ml-2 bg-[#1f7a4a] text-white text-xs px-2 py-0.5 rounded-full">{c.unread}</div>
                ) : null}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
