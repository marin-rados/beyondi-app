import linePattern from "../assets/Activity/linePattern.svg";
import usersOverTime from "../assets/Activity/usersOverTime.svg";

const Activity = () => {
  return (
    <div className="activity">
      <div className="card">
        <div className="card-title">
          <h2 className="card-title__main">
            {" "}
            Grow your users. <br /> Smarter.
          </h2>
          <p className="card-title__subtitle">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="card-options">
          <div className="card-options-inputs">
            <input
              type="email"
              placeholder="Enter your email"
              className="card-options-inputs__input"
            />
            <p className="card-options-inputs__disclamer">
              We care about your data in our{" "}
              <span className="card-options-inputs__disclamer--underline">
                {" "}
                privacy policy
              </span>
              .
            </p>
          </div>
          <button className="card-options__btn">Get started</button>
        </div>
      </div>
      <img
        className="line-pattern line-pattern--left"
        src={linePattern}
        alt="Line Pattern Image"
      />
      <img
        className="users-over-time"
        src={usersOverTime}
        alt="Users Over Time Image"
      />
      <img
        className="line-pattern line-pattern--right"
        src={linePattern}
        alt="Line Pattern Image"
      />
    </div>
  );
};

export default Activity;
