import { FaHandsHelping, FaUtensils, FaBoxOpen, FaLeaf, FaUsers, FaShieldAlt } from 'react-icons/fa'

const homeData = {
  stats: {
    title: '1,284 Meals Shared Today',
    subtitle: 'Helping neighbors share surplus food and reduce waste.',
    primaryCta: 'Be a Hero',
    secondaryCta: 'Find Food',
    bigNumber: '1,284',
    bigNumberLabel: 'Meals Shared Today',
    backgroundImage: '../src/assets/happy-shairing-community.PNG',
    // overlayOpacity controls darkness of the hero fade overlay (0 = transparent, 1 = opaque)
    // increased to make background less visible
    overlayOpacity: 0.73
  },
    // story content shown in hero
    story: {
      title: 'Food Story of the Day',
      quote: "A local bakery had unsold pastries. Within an hour, they were warming the table of a family of five just down the street. That's community.",
      author: '— Foodshare Community'
    },
  cards: [
    { id: 'c1', icon: <FaHandsHelping />, title: 'Be a Hero', description: "Share meals you won't use and help neighbors in need.", cta: 'Share Now' },
    { id: 'c2', icon: <FaUtensils />, title: 'Find Food', description: 'See available meals in your area and claim what you need.', cta: 'Browse' },
    { id: 'c3', icon: <FaBoxOpen />, title: 'How it Works', description: 'Simple steps: post, connect, and deliver.', cta: 'Learn More' }
  ],
  map: {
    count: '123,456'
  },
  values: [
    { id: 'v1', icon: <FaLeaf />, title: 'Sustainability', description: 'Reduce waste and support local sharing.' },
    { id: 'v2', icon: <FaUsers />, title: 'Community', description: 'Neighbors helping neighbors.' },
    { id: 'v3', icon: <FaShieldAlt />, title: 'Safety', description: 'Guidelines to ensure safe sharing.' }
  ],
  testimonials: [
    { id: 't1', quote: 'I found fresh meals for my family in minutes.', author: 'Aisha' },
    { id: 't2', quote: 'Sharing our surplus has been so rewarding.', author: 'Miguel' }
  ]
}

export default homeData
