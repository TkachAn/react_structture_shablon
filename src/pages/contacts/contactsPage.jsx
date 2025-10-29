import { Section } from "../../components/structure/main/sections/section";
import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { AsideLeft } from "../../components/structure/main/aside/asideL";
import { AsideRight } from "../../components/structure/main/aside/asideR";
import { HeaderV} from "../../components/structure/header/header_v";
import { NavbarV } from "../../components/structure/header/navbar/nav_v";
/*import s from "../sP.module.css";*/

export function ContactsPage() {
  return (
    <>
      <Header />
      <Main title="Contacts Page">
        
        <AsideLeft title={"Aside Left Section"}>
          <HeaderV />
          <NavbarV />
        </AsideLeft>
        <Section title={"Contact Information"}>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
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
