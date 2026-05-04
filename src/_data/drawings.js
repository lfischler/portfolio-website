export default function () {
  const cloudinaryBase = "https://res.cloudinary.com/diwlxq34b/image/upload/f_auto,q_auto/portfolio/images/drawings";
  
  const files = [
    "bike-vie.jpg",
    "graham-vie.jpg",
    "makers-vie.jpg",
    "me-vie.jpg",
    "phones-vie.jpg",
    "suits-vie.jpg"
  ];

  const all = files.map((f) => `${cloudinaryBase}/${f}`);
  const random = all[Math.floor(Math.random() * all.length)];

  return { all, random };
}