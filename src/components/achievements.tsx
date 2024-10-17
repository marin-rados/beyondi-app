import MainTitle from "./mainTitle";
import SubTitle from "./subTitle";

const Achievements = () => {
  return (
    <>
      <div className="achievements">
        <div className="achievements__mobile">
          <div className="achievements__header">
            <MainTitle>Unleash the full power of data</MainTitle>
            <SubTitle>
              Everything you need to convert, engage, and retain more users.
            </SubTitle>
          </div>
          <div className="stats">
            <div className="achievements__header--mobile">
              <MainTitle color="#42307d">
                Unleash the full power of data
              </MainTitle>
              <SubTitle color="#6941c6">
                Everything you need to convert, engage, and retain more users.
              </SubTitle>
            </div>
            <div className="stats__card">
              <h2 className="stats__card__title">400+</h2>
              <p className="stats__card__info">Projects Completed</p>
            </div>
            <div className="stats__card">
              <h2 className="stats__card__title">600%</h2>
              <p className="stats__card__info">Return on investment</p>
            </div>
            <div className="stats__card">
              <h2 className="stats__card__title">10k</h2>
              <p className="stats__card__info">Global downloads</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
