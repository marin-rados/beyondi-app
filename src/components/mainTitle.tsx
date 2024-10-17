import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
  textSize?: number;
  center?: boolean;
};

const MainTitle = ({ children, color, textSize, center = true }: Props) => {
  return (
    <h2
      style={{
        color: `${color}`,
        fontSize: `${textSize}rem`,
        textAlign: center ? "center" : "left",
      }}
      className="main-title"
    >
      {children}
    </h2>
  );
};

export default MainTitle;
