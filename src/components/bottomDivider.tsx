type Props = {
  width?: string;
};

const BottomDivider = ({ width = "90%" }: Props) => {
  return <hr style={{ width: `${width}` }} className="bottom-divider" />;
};

export default BottomDivider;
