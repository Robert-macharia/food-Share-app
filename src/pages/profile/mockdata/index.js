import { MdAssignmentTurnedIn, MdLocalOffer, MdSettings } from "react-icons/md";

export const userProfile = {
  name: "Alex Doe",
  email: "alex.doe@email.com",
  joined: "January 2023",
  avatar: "https://dummyimage.com/96x96/cccccc/000000&text=AD",
  stats: {
    shared: 12,
    claimed: 8,
    rating: 4.8,
  },
};


export const offers = [
  //  {
  //   id: 1,
  //   title: "Fresh orange",
  //   status: "Available",
  //   date: "June 15, 2024",
  //   image: "https://dummyimage.com/120x120/cccccc/000000&text=orange",
  // },
  // {
  //   id: 2,
  //   title: "Box of cabbage",
  //   status: "Claimed",
  //   date: "June 12, 2024",
  //   image: "https://dummyimage.com/120x120/cccccc/000000&text=cabbage",
  // },
];

export const claims = [
   {
    id: 1,
    title: "Fresh Loaf of Sourdough Bread",
    status: "Available",
    date: "June 15, 2024",
    image: "https://dummyimage.com/120x120/cccccc/000000&text=Bread",
  },
  {
    id: 2,
    title: "Box of Organic Apples",
   status: "claimed",
    date: "June 12, 2024",
    image: "https://dummyimage.com/120x120/cccccc/000000&text=Apples",
  },
];


export const statsData = [
  { label: "Items Shared", key: "shared"  },
  { label: "Items Claimed", key: "claimed" },
  { label: "Rating", key: "rating" },
];

export const tabs = [
  { label: "My Offers", to: "/offers", icon: MdLocalOffer  },
  { label: "My Claims", to: "/claims", icon: MdAssignmentTurnedIn },
  { label: "Settings", to: "/settings", icon: MdSettings },
];