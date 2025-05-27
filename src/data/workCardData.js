// This is our data of clients for Client Work Cards

// ===========================
// EXAMPLE USAGE
// ===========================

// {
//   workCardItems
//     .slice(0, 3)
//     .map((item_) => (
//       <WorkCard key={item_.id} image={item_.image} client={item_.client} />
//     ));
// }

import clientWork1 from "/src/assets/clientWork1.webp";
import clientWork2 from "/src/assets/clientWork2.webp";
import clientWork3 from "/src/assets/clientWork3.webp";
import clientWork4 from "/src/assets/clientWork4.webp";

export const workCardItems = [
  {
    id: 1,
    image: clientWork4,
    client: "Hyrax Oil",
    link: "#",
    type: ["Web Design", "Web Development"],
  },
  {
    id: 2,
    image: clientWork4,
    client: "Sarawak Lubricants",
    link: "#",
    type: ["Web Design"],
  },
  {
    id: 3,
    image: clientWork4,
    client: "Face by Aisya",
    link: "#",
    type: ["Web Design", "Web Development"],
  },
  {
    id: 4,
    image: clientWork2,
    client: "Client 4",
    link: "#",
    type: ["Web Design", "Web Development"],
  },
  {
    id: 5,
    image: clientWork1,
    client: "Client 5",
    link: "#",
    type: ["Web Design", "Web Development"],
  },
  {
    id: 6,
    image: clientWork2,
    client: "Client 6",
    link: "#",
    type: ["Web Design", "Web Development"],
  },
];
