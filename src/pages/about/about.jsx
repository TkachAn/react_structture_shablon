import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { Section } from "../../components/structure/main/sections/section";
import { Article } from "../../components/structure/main/article/artice";
import { Article1Content } from "./1articleContent";

export function AboutPage() {
  return (
    <>
      <Header />
      <Main title="About Page">
        <Section title={"About Section"}>
          <Article title="First Article">
            <Article1Content />
          </Article>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
