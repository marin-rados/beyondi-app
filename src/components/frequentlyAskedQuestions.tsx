import { faqData } from "../data/faqData";
import BottomDivider from "./bottomDivider";
import MainTitle from "./mainTitle";
import SubTitle from "./subTitle";
import avatars from "../assets/FAQ/avatars.png";
import Button from "./button";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="faq">
      <div className="faq-titles">
        <MainTitle>Frequently asked questions</MainTitle>
        <SubTitle>
          Everything you need to know about the product and billing.
        </SubTitle>
      </div>
      <div className="faq-questions">
        {faqData.map((question) => {
          return (
            <>
              <div key={question.id} className="question">
                <p className="question__label">{question.question}</p>
                <img
                  src={question.hasAnswer ? question.shrink : question.icon}
                  alt="Expand/Shrink Icon"
                />
              </div>
              {question.hasAnswer ? (
                <p className="answer">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              ) : (
                ""
              )}
              {question.hasBottomBorder ? <BottomDivider width="100%" /> : ""}
            </>
          );
        })}
      </div>
      <div className="avatars">
        <img src={avatars} alt="Avatars Image" className="avatars__img" />
        <p className="avatars__label">Still have questions?</p>
        <p className="avatars__disclamer">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <Button height={3} width={"8.375rem"}>
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
