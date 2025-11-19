import  { useState } from 'react'
import Sidebar from './chatSections/Sidebar'
import EmptyState from './chatSections/EmptyState'
import ConversationView from './chatSections/ConversationView'
import data from './mockdata'

const Chat = () => {
  const [activeId, setActiveId] = useState(null)

  const conversation = data.conversations.find((c) => c.id === activeId)

  return (
    <div className="min-h-screen bg-[#f6f5e8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-1">
            <Sidebar conversations={data.conversations} onOpen={(id) => setActiveId(id)} activeId={activeId} />
          </aside>

          <main className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            {!conversation ? (
              <EmptyState />
            ) : (
              <ConversationView conversation={conversation} onBack={() => setActiveId(null)} />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Chat
