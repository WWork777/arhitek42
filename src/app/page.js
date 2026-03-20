import Image from "next/image";
import Hero from "../../components/Home/Hero/Hero";
// import Projects from "../../components/Home/Projects/Projects";

import Blog from "../../components/Catalog/Catalog";
import Advantages from "../../components/Home/Advantages/Advantages";
// import Form from "../../components/Home/Form/Form";
import Quiz from "../../components/QuizEVG/Quiz";
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import videos from "../../components/VideoGallery/videos.json";
import QuizComponent from "../../components/QuizComponent/QuizComponent";
import Consultation from "../../components/Consultation/Consultation";
import BanksPartners from "../../components/Bank/BanksPartners";
import GaleryMainPage from "../../components/GaleryPage/GaleryMainPage";
import HomePromo from "../../components/IpotekaBanner/IpotekaBanner";

export const metadata = {
  title: "Строительство домов под ключ в Кемерово",
  description:
    "Профессиональное строительство домов под ключ в Кемерово. Каталог готовых проектов, цены, ипотека. Гарантия качества!",
  alternates: {
    canonical: "https://arhitek42.ru",
  },
  keywords: [
    "построить дом",
    "строительство домов",
    "дом под ключ",
    "дом под ключ цена",
    "строительство домов Кемерово",
  ],
  openGraph: {
    title: "Строительство домов под ключ в Кемерово",
    description:
      "Профессиональное строительство домов под ключ в Кемерово. Каталог готовых проектов, цены, ипотека. Гарантия качества!",
    url: `https://arhitek42.ru`,
    images: [
      {
        url: `/favicon/og-banner.png`,
        alt: "Архитек",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      {/* <HomePromo /> */}
      <BanksPartners />
      <QuizComponent />

      {/* <Quiz /> */}
      <Blog />
      {/* <GaleryMainPage /> */}
      <VideoGallery videos={videos} title="Видеоблог Архитек" />
      <Consultation />
      {/* <Services /> */}
      {/* <Form /> */}
    </>
  );
}
