import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasBackground?: boolean;
  weight?: number;
  textSize?: number;
};

const TitleButton = ({
  children,
  hasBackground = true,
  weight = 500,
  textSize = 0.875,
}: Props) => {
  return (
    <div
      className="title"
      style={{
        backgroundColor: `${hasBackground ? "#f9f5ff" : ""}`,
        fontWeight: `${weight}`,
        fontSize: `${textSize}rem`,
      }}
    >
      {children}
    </div>
  );
};

export default TitleButton;
