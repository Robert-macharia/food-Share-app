import React, { useEffect, useRef, useState } from 'react'

const ConversationView = ({ conversation = {}, messages = [], onSend }) => {
  const [text, setText] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e) => {
    e?.preventDefault()
    if (!text.trim()) return
    onSend && onSend({ text: text.trim(), time: new Date().toISOString() })
    setText('')
  }

  if (!conversation || !conversation.id) {
    return <div className="h-full flex items-center justify-center text-gray-400">Select a conversation</div>
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4">
        <img src={conversation.avatar} alt={conversation.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{conversation.name}</div>
          <div className="text-xs text-gray-500">{conversation.subtitle}</div>
        </div>
      </div>

      <div ref={listRef} className="flex-1 overflow-auto p-8 space-y-6 bg-[#fbfdfb]">
        {messages.map((m) => (
          <div key={m.id} className="flex items-end">
            {!m.fromSelf && (
              <>
                <img src={conversation.avatar} alt={conversation.name} className="w-9 h-9 rounded-full mr-3" />
                <div>
                  <div className="bg-white text-gray-800 p-3 rounded-2xl max-w-xl">{m.text}</div>
                  <div className="text-[11px] text-gray-400 mt-1">{m.time}</div>
                </div>
              </>
            )}

            {m.fromSelf && (
              <div className="ml-auto text-right">
                <div className="inline-flex items-end gap-2">
                  <div className="bg-[#dff6e8] text-gray-900 p-3 rounded-2xl max-w-xl">{m.text}</div>
                  <img src={m.avatar || '/assets/default-avatar.jpg'} alt="You" className="w-8 h-8 rounded-full" />
                </div>
                <div className="text-[11px] text-gray-400 mt-1">{m.time}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white flex items-center gap-3">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a message" className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm" />
        <button type="submit" className="bg-[#1f7a4a] text-white px-4 py-2 rounded-full text-sm">Send</button>
      </form>
    </div>
  )
}

export default ConversationView
