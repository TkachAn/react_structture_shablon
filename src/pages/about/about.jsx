import React from "react";
import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { Section } from "../../components/structure/main/sections/section";
import { Article } from "../../components/structure/main/article/artice";
import { Article1Content } from "./1articleContent";
import {
  SimpleSlider,
  Carousel,
} from "../../components/base/carousel/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../home/content/developers/TeamCard";
import { developersData } from "../home/content/developers/data"; // Импортируем данные команды
// Настройки карусели для раздела "Команда"
const teamSliderSettings = {
  slidesToShow: 4, // Показываем 4 карточки на широком экране
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  // Адаптивность для TeamCard (можно перенести в компонент Carousel)
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export function AboutPage() {
  return (
    <>
      <Header />
      <Main title="About Page">
        <Section title={"About Section"}>
          <Article title="First Article">
            <SimpleSlider />
           
            <Carousel
              // 1. Передаем массив данных
              data={developersData}
              // 2. Передаем компонент карточки.
              //   TeamCard будет рендериться как дочерний элемент в Carousel.
              CardComponent={TeamCard}
              // 3. Передаем настройки
              settings={teamSliderSettings}
            />
          </Article>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
