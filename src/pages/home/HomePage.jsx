import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { MainHome } from "../../components/structure/main/mainHome";
import { Main } from "../../components/structure/main/main";
import { Hero } from "../../components/structure/main/hero/hero";
import { Section } from "../../components/structure/main/sections/section";
import { Advantages } from "./content/advantages";
import { HeroContent } from "./content/hero";
import Clients from "./content/clients";
import { Craft } from "./content/craft";

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
        </Main>
      </MainHome>
      <Footer />
    </>
  );
}
