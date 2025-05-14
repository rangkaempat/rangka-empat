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

export const workCardItems = [
  { id: 1, image: clientWork1, client: "Hyrax Oil" },
  { id: 2, image: clientWork2, client: "Sarawak Lubricants" },
  { id: 3, image: clientWork1, client: "Face by Aisya" },
  { id: 4, image: clientWork2, client: "Client 4" },
  { id: 5, image: clientWork1, client: "Client 5" },
  { id: 6, image: clientWork2, client: "Client 6" },
];
