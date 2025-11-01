import s from "./s.module.css";

export const FlexBox = ({ children, ...props }) => {
  return (
    <div className={s.flexBox} {...props}>
      {children}
    </div>
  );
};
