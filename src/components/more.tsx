import { ReactNode } from "react";
import arrowRight from '../assets/arrowRight.svg';

type Props = {
    children: ReactNode;
}

const More = ({children}: Props) => {
    return <div className="more">
    <p className="more__text">{children}</p>
    <img
      className="more__img"
      src={arrowRight}
      alt="Arrow Right Icon"
    />
  </div>
}

export default More;