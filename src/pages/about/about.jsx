import { Header } from "../../components/structure/header/header";
//import { HeaderV } from "../../components/structure/header/header_v";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { AsideRight } from "../../components/structure/main/aside/asideR";
import { Section } from "../../components/structure/main/sections/section";
import { Article } from "../../components/structure/main/article/artice";
import { Article1Content } from "./1articleContent";
import { AsideLeft } from "../../components/structure/main/aside/asideL";

export function AboutPage() {
  return (
    <>
      <Header />
      <Main title="About Page">
      

        <AsideLeft title={"Aside Left Section"}>
          <p>
            This is some aside content. This is some aside content. This is some
            aside content. This is some aside content. This is some aside
            content. This is some aside content.
          </p>
        </AsideLeft>

        <Section title={"About Section"}>
                      <Article title="First Article">
                        <Article1Content />
                      </Article>
        </Section>

        <AsideRight title={"Aside Right Section"}>
          <p>
            This is some aside content. This is some aside content. This is some
            aside content. This is some aside content. This is some aside
            content. This is some aside content.
          </p>
        </AsideRight>
      </Main>
      <Footer />
    </>
  );
}
