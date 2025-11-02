import s from "./hero.module.css";
import { Container } from "../../../../components/structure/container/container";

export function HeroContent() {
  return (
    <div className={s.hero}>


      {/* 2. Контент оборачиваем в отдельный div, чтобы он был поверх фона */}
      <div className={s.hero__content}>
        <Container>
          <h1 className={s.hero__title}>
            Эффективные решения <br />
            для вашего бизнеса
          </h1>
          <button className={s.hero__btn} type="button" data-modal-open>
            Заказать услугу
          </button>
        </Container>
      </div>
    </div>
  );
}
