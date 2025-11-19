const data = {
  summary: {
    average: 4.8,
    totalReviews: 124,
    distribution: [
      { stars: 5, percent: 70 },
      { stars: 4, percent: 20 },
      { stars: 3, percent: 5 },
      { stars: 2, percent: 3 },
      { stars: 1, percent: 2 },
    ],
  },
  comments: [
    {
      id: 1,
      name: "Jane Smith",
      date: "October 26, 2023",
      avatar: "https://i.pravatar.cc/48?img=47",
      rating: 5,
      text: "Alex was incredibly generous and the sourdough bread was absolutely divine. The pickup was seamless and he was very friendly. Highly recommend connecting with him!",
    },
    {
      id: 2,
      name: "Community Member",
      date: "September 15, 2023",
      avatar: "https://i.pravatar.cc/48?img=32",
      rating: 4,
      text: "Great experience. The vegetables were fresh from the garden. A bit of a delay in coordinating pickup, but overall very positive.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      date: "August 02, 2023",
      avatar: "https://i.pravatar.cc/48?img=12",
      rating: 5,
      text: "Fantastic! The apple pie was a hit with my family. Alex is a pillar of the Foodshare community.",
    },
  ],
  pagination: {
    totalPages: 3,
    currentPage: 1,
  },
};

export default data;