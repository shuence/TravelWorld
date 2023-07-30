import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const blogs = [
  {
    id: "01",
    title: "Westminster Bridge - A Must-See Landmark in London",
    content: `Discover the beauty of Westminster Bridge in London, offering breathtaking views of iconic landmarks such as the Big Ben and the Houses of Parliament. Stroll along the bridge's elegant structure while capturing the perfect photographs of the River 
    Thames and the London Eye. Embrace the historical significance of this architectural masterpiece 
    and explore the nearby attractions that make London a global city of culture, history, and diversity.
     Experience the vibrant city life, savor traditional British cuisine, and indulge in a multitude of art and entertainment options.
    Thames and the London Eye. Embrace the historical significance of this architectural masterpiece 
    and explore the nearby attractions that make London a global city of culture, history, and diversity.
     Experience the vibrant city life, savor traditional British cuisine, and indulge in a multitude of art and entertainment options.`,
    author: "TravelEnthusiast",
    date: "2023-07-29",
    photo: tourImg01,
    comments: [
      {
        name: "John Doe",
        comment: "Nice Information",
    },
      {
        name: "Jane Smith",
        comment: "Great blog post!",
      },
    ],
    featured: false,
  },
  {
    id: "02",
    title: "Bali, Indonesia - A Tropical Paradise",
    content: `Immerse yourself in the serene beauty of Bali, with its stunning beaches, lush rice terraces, and vibrant culture. Bali, the Island of the Gods, offers a perfect blend of relaxation and adventure. Spend your days lounging on the picturesque beaches, explore ancient temples that narrate tales of history, and dive into the turquoise waters to discover an enchanting underwater world. Experience the warmth and hospitality of the Balinese people, and savor the flavors of the local cuisine. Bali is a destination that will leave you with unforgettable memories.`,
    author: "WanderlustJourney",
    date: "2023-07-28",
    photo: tourImg02,
    comments: [],
    featured: false,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand - A Winter Wonderland",
    content: `Experience the magic of the Snowy Mountains in Thailand, where you can enjoy snowy landscapes and thrilling winter activities. Whether you're an experienced skier or a first-time snowboarder, the Snowy Mountains provide excellent opportunities for winter sports. Glide down the slopes with breathtaking views of the surrounding peaks and indulge in warm, cozy evenings by the fireplace. Beyond the snow-covered peaks, discover the charm of traditional Thai culture and explore the local markets and warm hospitality. Snowy Mountains in Thailand is an excellent winter destination that guarantees an unforgettable holiday.`,
    author: "SnowSeeker",
    date: "2023-07-27",
    photo: tourImg03,
    comments: [
      {
        username: "Alice Johnson",
        comment: "I loved skiing there!",
      },
    ],
    featured: false,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand - A Magical Morning Experience",
    content: `Witness the captivating beauty of a sunrise in Thailand, where the sky lights up with vibrant hues of orange and pink. Be spellbound by the mesmerizing sight as the sun rises above the horizon, painting the landscape with colors of gold. Choose from a variety of scenic spots to witness this magical morning spectacle, from pristine beaches to misty mountains. As the world awakens to a new day, embrace the serenity and tranquility that a sunrise in Thailand brings. Capture these priceless moments and let the magical memories stay with you forever.`,
    author: "SunriseAdventurer",
    date: "2023-07-26",
    photo: tourImg04,
    comments: [],
    featured: false,
  },
  {
    id: "05",
    title: "Nusa Penida Bali, Indonesia - Hidden Gem of the Archipelago",
    content: `Embark on an unforgettable journey to Nusa Penida, a hidden gem located off the coast of Bali, Indonesia. Discover untouched natural beauty, including stunning cliffs, turquoise waters, and pristine beaches. Explore the iconic Kelingking Beach and Angel's Billabong, where the beauty of nature will leave you awestruck. Snorkel with majestic manta rays and swim among vibrant marine life in crystal-clear waters. Nusa Penida offers a peaceful escape from the bustling crowds, allowing you to connect with nature and experience pure bliss.`,
    author: "IslandExplorer",
    date: "2023-07-25",
    photo: tourImg05,
    comments: [
      {
        username: "Robert Smith",
        comment: "The beaches are stunning!",
      },
    ],
    featured: true,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring - A Delightful Experience in Japan",
    content: `Embark on a journey to Japan during the enchanting cherry blossom season, known as Hanami. Witness the magic of spring as cherry blossoms bloom in delicate shades of pink and white, adorning parks, temples, and streets across the country. Experience the tradition of Hanami, where locals and visitors gather to enjoy picnics beneath the cherry trees. Capture breathtaking photographs as petals gently fall like snow, creating a surreal atmosphere. Embrace the harmony of nature and culture in Japan during this exquisite time of the year.`,
    author: "SakuraLover",
    date: "2023-07-24",
    photo: tourImg06,
    comments: [
      {
        username: "Michael Johnson",
        comment: "I wish to visit Japan during Hanami!",
      },
    ],
    featured: true,
  },
  {
    id: "07",
    title: "Holmen Lofoten, France - A Picturesque Coastal Retreat",
    content: `Escape to the picturesque Holmen Lofoten in France, a coastal paradise that offers breathtaking views of the sea and majestic cliffs. Enjoy leisurely walks along the rugged coastline, and witness the Northern Lights dancing in the night sky during the winter months. Experience the tranquil atmosphere of fishing villages and indulge in fresh seafood delicacies. Holmen Lofoten is a perfect destination for those seeking solace and natural beauty at its finest. Immerse yourself in the charm of this coastal retreat and create memories that will last a lifetime.`,
    author: "CoastalDreamer",
    date: "2023-07-23",
    photo: tourImg07,
    comments: [],
    featured: true,
  },
];

export default blogs;
