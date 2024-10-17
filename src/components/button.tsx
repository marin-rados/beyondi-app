import { ReactNode } from "react";

type Props = {
  width: string;
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  height?: number;
  textSize?: number;
  onClick?: () => void;
};

const Button = ({
  width,
  children,
  color = "#fff",
  backgroundColor = "#7F56D9",
  borderColor = "#7F56D9",
  height,
  textSize,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        height: `${height}rem`,
        width: `${width}`,
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        border: `1px solid ${borderColor}`,
        fontSize: `${textSize}rem`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
