import image1 from "@/assert/E-Shop_1.png";
import image2 from "@/assert/smartmockups_lwylt29f.jpg";
import image3 from "@/assert/DISASTER RELIFE1.png";
import image4 from "@/assert/helth.jpg";
const project = [
  {
    id: 1,
    image: image1,
    title: "E-Shop",
    description:
      "E-Shop is an e-commerce website that offers a wide range of clothing items for men, women, and kids. Users can browse and purchase products from various categories, add items to their cart, and complete their purchases with ease",
    technology: [
      "HTML",
      "CSS",
      "TypeScript",
      "Next js",
      "Taliwind Css",
      "Shadcn/ui",
    ],
    liveSiteLink: "https://e-shop-fashion.vercel.app/",
    githubLink: "https://github.com/Mahmudtareq/clothing-Store-client-.git",
  },
  {
    id: 2,
    image: image3,
    title: "Disaster Relife",
    description:
      "This is a description of Project Two. It is a mobile application that helps users track their fitness goals.",
    technology: [
      "HTML",
      "CSS",
      "TypeScript",
      "React Js",
      "Redux-toolkit",
      "Taliwind Css",
      "Shadcn/ui",
    ],
    liveSiteLink: "https://lucent-fudge-fd3697.netlify.app/",
    githubLink: "https://github.com/Mahmudtareq/disaster-relife-client.git",
  },
  {
    id: 3,
    image: image4,
    title: "Health Revolation",
    description:
      "Health Revolution is a comprehensive desktop application designed to help users manage and improve their health and wellness. The application offers features such as tracking diet and nutrition, monitoring physical activities, setting health goals, and providing insights and recommendations based on user data.",
    technology: ["HTML", "CSS", "Javascript", "React Js","React-router-dom", "Bootstrep 5"],
    liveSiteLink: "https://health-revolation.web.app/",
    githubLink: "https://github.com/Mahmudtareq/health-care-diagnostic",
  },
];

export function getProjectData() {
  return project;
}
