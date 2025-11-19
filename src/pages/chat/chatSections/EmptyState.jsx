import React from 'react'

const EmptyState = ({ onStartNew }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center text-gray-600">
      <div className="w-28 h-28 rounded-full bg-[#f0fbf5] flex items-center justify-center mb-4">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1f7a4a]">
          <path d="M4 4h16v12H7l-3 3V4z" stroke="#1f7a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">Select a conversation</h3>
      <p className="text-sm text-gray-500 mb-6 max-w-[420px]">Choose from your existing conversations to read messages or start a new one.</p>

      <button onClick={onStartNew} className="bg-[#1f7a4a] text-white px-5 py-2 rounded-full text-sm">New Message</button>
    </div>
  )
}

export default EmptyState
