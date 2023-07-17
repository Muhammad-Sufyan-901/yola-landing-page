import { images } from "./Images";
import { icons } from "../constant/Icons";

const { BsStar, BsStarFill, BsStarHalf, FaInstagram, FaTwitter, FaYoutube } = icons;
const { Card1, Card2, Card3, Course1, Course2, Course3 } = images;

export const navigation = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Classes",
    href: "#courses",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const cards = {
  card1And2: [
    {
      img: Card1,
      title: "Make Your Own Plan For Yoga.",
      number: 1,
      delay: "400",
    },
    {
      img: Card2,
      title: "Find a Yoga Mentor For You.",
      number: 2,
      delay: "600",
    },
  ],
  card3: {
    img: Card3,
    title: "Every-Day Open Master Classes.",
    desc: "We’re boosting online yoga by enabling anyone in the world to learn from the best",
    number: 3,
    delay: "800",
  },
};

export const facts = [
  {
    startNumber: "1",
    endNumber: "5",
    unit: "",
    title: "Years of Experience",
    desc: "We are 5 years of experienced in this yoga field. Giving the best instructions.",
    delay: "600",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Happy Clients",
    desc: "We have over five thousand clients all over the world. They are very satisfied.",
    delay: "700",
  },
  {
    startNumber: "1",
    endNumber: "15",
    unit: "",
    title: "Experienced Trainers",
    desc: "We have over fifteen dedicated and experienced trainer for yoga and meditation.",
    delay: "800",
  },
  {
    startNumber: "1",
    endNumber: "24",
    unit: "",
    title: "Monthly Classes",
    desc: "Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.",
    delay: "900",
  },
];

export const courses = [
  {
    image: Course1,
    title: "Resortive Yoga Training & Immersion",
    desc: "Here is some tips for new job seekars who want to get a dream job and want to shine in his career.",
    link: "#",
    stars: [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStar],
    delay: "600",
  },
  {
    image: Course2,
    title: "Resortive Yoga Training & Immersion",
    desc: "Here is some tips for new job seekars who want to get a dream job and want to shine in his career.",
    link: "#",
    stars: [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    delay: "800",
  },
  {
    image: Course3,
    title: "Resortive Yoga Training & Immersion",
    desc: "Here is some tips for new job seekars who want to get a dream job and want to shine in his career.",
    link: "#",
    stars: [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStarHalf],
    delay: "900",
  },
];

export const pricing = [
  {
    title: "Single yoga class",
    price: "$15.",
    list: ["Pay as you go", "Perfect for non-residence", "Access to all classes"],
    delay: "600",
  },
  {
    title: "Single yoga class",
    price: "$60.",
    list: ["Pay as you go", "Perfect for non-residence", "Access to all classes", "Access to all mentor"],
    delay: "800",
  },
  {
    title: "Single yoga class",
    price: "$150.",
    list: ["Pay as you go", "Perfect for non-residence", "Access to all classes", "Access to all mentor"],
    delay: "900",
  },
];

export const footer = [
  {
    Icon: FaYoutube,
    href: "https://youtube.com",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    Icon: FaTwitter,
    href: "https://twitter.com",
  },
];
