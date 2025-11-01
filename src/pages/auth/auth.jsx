/*import s from "./s.module.css";*/
import{ SignIn, SignUp} from "../../components/structure/header/auth/signin.jsx";    
import { Header } from "../../components/structure/header/header.jsx";
import { Main } from "../../components/structure/main/main.jsx";
import { Section } from "../../components/structure/main/sections/section";
import { Footer } from "../../components/structure/footer/footer.jsx";

export function AuthPage() {
    return (
      <>
        <Header />
        <Main>
          <Section title={"Authentication"}>
            <p>Please sign in to access your account.</p>
            <SignIn />
          </Section>
          <Section title={"Registration"}>
            <p>Please sign up to create a new account.</p>
            <SignUp />
          </Section>
        </Main>
        <Footer />
      </>

    );
}
