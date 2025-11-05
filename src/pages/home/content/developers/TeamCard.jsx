import s from "./TeamCard.module.css";
import SocialLinks from "./SocialLinks";

const TeamCard = ({ name, position, image }) => {
  return (
    <div className={s.developers__teamCard + " " + s.teamCard}>
      <img
        className={s.teamCard__img}
        srcSet={image.srcset}
        src={image.src}
        alt={image.alt}
      />
      <div className={s.teamCard__footer}>
        <p className={s.teamCard__text}>
          <span className={s.teamCard__name}>{name}</span>
          <br />
          {position}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default TeamCard;
