import { capabilitiesData } from "../data/capabilitiesData";
import More from "./more";

type Props = {
  bgColor?: string;
  pd?: number;
  hasMore?: boolean;
}

const Capabilities = ({bgColor, pd = 6, hasMore = false}: Props) => {
  return (
    <div className="capabilities" style={{backgroundColor: `${bgColor}`, padding: `${pd}rem 0rem`}}>
      {capabilitiesData.map((capability) => {
        return (
          <div key={capability.id} className="capability">
            <img
              src={capability.icon}
              alt="Capability Icon"
              className="capability__img"
            />
            <h2 className="capability__title">{capability.title}</h2>
            <p className="capability__info">{capability.info}</p>
         {hasMore ? (<More children="Learn more" />) : ''}   
          </div>
        );
      })}
    </div>
  );
};

export default Capabilities;
