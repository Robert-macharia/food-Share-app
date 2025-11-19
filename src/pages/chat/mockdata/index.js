const data = {
  conversations: [
    {
      id: '1',
      name: 'John Appleseed',
      lastMessage: "Hey is the sourdough still available?",
      time: '5m',
      avatar: '/assets/team/john.jpg',
      messages: [
        { id: 'm1', from: 'other', text: 'Hi! Is the sourdough starter still available for pickup today?', time: '9:02 AM' },
        { id: 'm2', from: 'me', text: "Yes, it's still available anytime after 5 PM. Does that work for you?", time: '9:12 AM' },
        { id: 'm3', from: 'other', text: 'Perfect! 5:30 PM works for me. Can you send the address?', time: '9:15 AM' }
      ]
    },
    {
      id: '2',
      name: 'Maria Garcia',
      lastMessage: 'Thanks! I will pick it up tomorrow.',
      time: '1h',
      avatar: '/assets/team/maria.jpg',
      messages: []
    },
    {
      id: '3',
      name: 'Sam Peterson',
      lastMessage: 'Sounds good, thanks for the update',
      time: 'Yesterday',
      avatar: '/assets/team/sam.jpg',
      messages: []
    }
  ]
}

export default data
