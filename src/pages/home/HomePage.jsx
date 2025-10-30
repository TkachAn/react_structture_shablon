import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { MainHome } from "../../components/structure/main/mainHome";
import { Main } from "../../components/structure/main/main";
import { Hero } from "../../components/structure/main/hero/hero";
import { Section } from "../../components/structure/main/sections/section";
import { Advantages } from "./content/advantages/advantages";
import { HeroContent } from "./content/hero/hero";
import Clients from "./content/clients/clients";
import { Craft } from "./content/craft/craft";
import Developers from "./content/developers/developers";

export function HomePage() {
  return (
    <>
      <Header />
      <MainHome>
        <Hero>
          <HeroContent />
        </Hero>
        <Main>
          <Section title="Особенности">
            <Advantages />
          </Section>
          <Section title="Наши услуги">
            <Craft />
          </Section>  
          <Section title="Наши клиенты">
            <Clients />
          </Section>
          <Section title="Наша команда разработчиков">
          <Developers />
          </Section>
        </Main>
      </MainHome>
      <Footer />
    </>
  );
}
