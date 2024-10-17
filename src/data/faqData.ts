import expandIcon from "../assets/FAQ/expandIcon.svg";
import shrinkIcon from "../assets/FAQ/shrinkIcon.svg";

export const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    shrink: shrinkIcon,
    hasBottomBorder: true,
    hasAnswer: true,
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    icon: expandIcon,
    hasBottomBorder: true,
    hasAnswer: false,
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    icon: expandIcon,
    hasBottomBorder: true,
    hasAnswer: false,
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    icon: expandIcon,
    hasBottomBorder: true,
    hasAnswer: false,
  },
  {
    id: 5,
    question: "How does billing work?",
    icon: expandIcon,
    hasBottomBorder: true,
    hasAnswer: false,
  },
  {
    id: 6,
    question: "How do I change my account email?",
    icon: expandIcon,
    hasBottomBorder: false,
    hasAnswer: false,
  },
];
