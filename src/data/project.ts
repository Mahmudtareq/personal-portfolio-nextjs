
import image1 from'@/assert/E-Shop_1.png'
import image2 from "@/assert/smartmockups_lwylt29f.jpg";
import image3 from "@/assert/DISASTER RELIFE1.png";
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
    image: image1,
    title: "Project Three",
    description:
      "This is a description of Project Three. It is a desktop application for managing personal finances.",
    technology: ["Python", "Tkinter", "SQLite"],
    liveSiteLink: "https://example.com/project3",
    githubLink: "https://github.com/username/project3",
  },
];

export function getProjectData() {
  return project;
}
