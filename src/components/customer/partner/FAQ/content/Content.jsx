import React, { useState } from "react";
import IMAGES from "../../../../../utils/images";

const Content = () => {
  const [questions, setQuestions] = useState([
    {
      type: "About FBase & How It Works",
      questions: [
        {
          question:
            "How does FBase help my clinic connect with new pet owners?",
          answer:
            "FBase showcases your clinic to thousands of local pet owners actively searching for veterinary services. Pet owners can easily find your profile, view services, and book appointments directly through our platform, increasing your visibility and client reach.",
        },
        {
          question: "What kind of clinics can join FBase?",
          answer:
            "We welcome all licensed veterinary clinics, from small private practices to larger animal hospitals and specialized pet care centers, that are looking to expand their client base and enhance their operational efficiency.",
        },
        {
          question: "How are appointments managed through FBase?",
          answer:
            "Pet owners can request appointments through your clinic's profile on FBase. You will receive instant notifications for new requests and can easily manage, confirm, or reschedule these appointments via your dedicated clinic dashboard on our platform.",
        },
      ],
    },
    {
      type: "Benefits & Value for Clinics",
      questions: [
        {
          question: "What are the main benefits of partnering with FBase?",
          answer:
            "Key benefits include significantly increased visibility to potential new clients, a streamlined online appointment booking system, efficient Electronic Medical Records (EMR) management, an enhanced overall customer experience, and targeted marketing support to help your clinic grow.",
        },
        {
          question: "Can FBase help reduce no-shows for appointments?",
          answer:
            "Yes, our platform features an automated appointment reminder system that sends notifications to pet owners prior to their scheduled visit. This has been shown to significantly help in reducing the rate of no-shows.",
        },
      ],
    },
    {
      type: "Technical & Support",
      questions: [
        {
          question:
            "What if I already use a different clinic management software?",
          answer:
            "FBase is designed to be user-friendly and can complement your existing systems, particularly for new client acquisition and online appointment booking. While direct integration capabilities with all third-party software may vary, we are continuously working to expand these options.",
        },
        {
          question: "What kind of technical support does FBase offer?",
          answer:
            "We offer dedicated technical support to our partner clinics. You can reach our support team via email, phone, or through the online chat feature on our platform during business hours for assistance with any platform-related issues or questions.",
        },
      ],
    },
    {
      type: "Pricing & Partnership Terms",
      questions: [
        {
          question: "What is the pricing model for partnering with FBase?",
          answer:
            "FBase offers several flexible partnership plans designed to suit the diverse needs and sizes of veterinary clinics. For detailed information on our pricing structure and to find the best plan for you, please contact our partnership team or complete the registration form for a personalized consultation.",
        },
        {
          question:
            "How is client data and clinic information protected on FBase?",
          answer:
            "Data security is a paramount concern at FBase. We employ industry-standard security protocols, including robust data encryption, secure server infrastructure, and regular security audits, to ensure the utmost protection and confidentiality of all clinic and client information, in full compliance with relevant privacy regulations.",
        },
      ],
    },
  ]);
  const [heightAnswer, setHeightAnswer] = useState();
  const [questionActive, setQuestionActive] = useState();

  const handleActiveQuestion = (question, event) => {
    setHeightAnswer(event.currentTarget.querySelector("p").offsetHeight);
    if (questionActive !== question) {
      setQuestionActive(question);
    } else {
      setQuestionActive();
    }
  };

  return (
    <div className="mt-18 w-[70%] mx-auto flex flex-col gap-10">
      {questions.map((item) => (
        <div className="flex w-full">
          <div className="w-[35%]">
            <h4 className="font-family-playfair-display text-[18px] font-medium text-[rgba(0,0,0,0.5)]">
              {item?.type}
            </h4>
          </div>
          <div className="w-[65%] flex flex-col gap-4">
            {item?.questions.map((question) => (
              <div
                className="cursor-pointer relative py-2 border-[rgba(0,0,0,0.1)] border-b-[1px] pr-[50px]"
                onClick={(event) => handleActiveQuestion(question, event)}
              >
                <h6 className="font-family-playfair-display text-[16px] font-medium text-[rgba(0,0,0,0.8)]">
                  {question?.question}
                </h6>
                <div
                  className="h-0 opacity-0 duration-300 ease-in-out"
                  style={{
                    height:
                      questionActive === question ? `${heightAnswer}px` : null,
                    opacity: questionActive === question ? 1 : null,
                  }}
                >
                  <p className="text-[14px] mt-1 text-[rgba(0,0,0,0.5)] pt-2.5 pb-1">
                    {question.answer}
                  </p>
                </div>

                <div className="absolute right-0 top-[5px]">
                  <img
                    src={IMAGES.arrowDown}
                    className="duration-300 ease-in-out"
                    style={{
                      transform:
                        questionActive === question ? "rotate(180deg)" : null,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
