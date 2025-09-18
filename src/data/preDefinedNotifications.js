const preDefinedNotifications = [
  {
    id: 1,
    user: "Uriah Pagac",
    message: "says hi!",
    time: new Date(Date.now() - 10 * 1000).toISOString(), // 10 sec ago
  },
  {
    id: 2,
    user: "Magnus Gislason",
    message: "is glad we're friends",
    time: new Date(Date.now() - 60 * 1000).toISOString(), // 1 min ago
  },
  {
    id: 3,
    user: "Magnus Gislason",
    message: "sent you a gift",
    time: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 min ago
  },
  {
    id: 4,
    user: "Lauren Bednar",
    message: "is glad we're friends",
    time: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
  },
];

export default preDefinedNotifications;