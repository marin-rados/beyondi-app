import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
  center?: boolean;
};

const SubTitle = ({ children, color, center = true }: Props) => {
  return (
    <h2
      style={{ color: `${color}`, textAlign: center ? "center" : "left" }}
      className="sub-title"
    >
      {children}
    </h2>
  );
};

export default SubTitle;
