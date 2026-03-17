import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Gallery", // Replaced 'About' with 'Gallery'
    path: "/gallery",
    newTab: false,
  },
  {
    id: 3,
    title: "ADODI (NGO)", 
    path: "/adodi",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;