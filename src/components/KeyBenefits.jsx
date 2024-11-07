import { useState, useEffect } from "react";
import {
  Target,
  Brain,
  BookOpen,
  Lightbulb,
  Smile,
  Trophy,
} from "lucide-react";

const KeyBenefits = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [visibleBenefits, setVisibleBenefits] = useState([]);

  const benefits = [
    {
      id: 1,
      title: "BUILD CONFIDENCE IN PROBLEM-SOLVING",
      description:
        "Brainy Abacus goes beyond improving math skills. It nurtures problem-solving abilities, fostering resilience in overcoming academic challenges",
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "EQUIP YOUR CHILD FOR THE FUTURE",
      description:
        "Our curriculum isn't just about math. Brainy Abacus develops life skills such as analytical thinking, time management, and multitasking, giving your child a lifelong competitive edge.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "CREATE POSITIVE LEARNING HABITS",
      description:
        "Screen time can be turned into a powerful tool for learning. Our blend of digital and physical activities ensures your child builds discipline and focus, crucial skills for success in both academics and life.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "DEVELOP CRITICAL THINKING",
      description:
        "Our unique Diziphyzi technique isn't just about mental arithmetic—it sharpens your child's critical thinking, memory recall, and concentration, skills essential for excelling in any subject.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "TRANSFORM MATH ANXIETY INTO ENTHUSIASM",
      description:
        "Many children struggle with math anxiety. Brainy Abacus transforms the way they approach numbers, making math fun and engaging, and helping them gain mastery over the subject.",
      icon: <Smile className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "INTERNATIONAL RECOGNITION AND COMPETITIVE EDGE",
      description:
        "Your child will not only excel academically but also have the chance to compete at state, national, and international levels, earning globally recognized certifications.",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the benefit to the visible list
            const benefitId = Number(entry.target.dataset.benefitId);
            setVisibleBenefits((prev) => [...prev, benefitId]);

            // Unobserve the element after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const benefitElements = document.querySelectorAll(".hidden-sub-point");
    benefitElements.forEach((el, index) => {
      el.dataset.benefitId = String(index + 1);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 poppins-light"
      id="benefits"
    >
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="max-w-2xl mx-auto p-6 border-2 mb-4 bg-[#b7ce21]/70">
          <h2 className="text-4xl font-bold mb-6">
            Does Your Child Need This Webinar?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded accent-[#024978]"
              />
              <span className="text-base">
                Is your child{" "}
                <span className="font-bold bg-yellow-200">struggling</span> with
                <span className="font-bold bg-yellow-200"> focus</span> and{" "}
                <span className="font-bold bg-yellow-200">concentration </span>?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Does math feel like a{" "}
                <span className="font-bold bg-yellow-200">daunting </span>
                subject to them?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Are you <span className="font-bold bg-yellow-200">worried</span>{" "}
                about how much time they spend in front of
                <span className="font-bold bg-yellow-200"> screens</span>?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Do you want your child to develop critical{" "}
                <span className="font-bold bg-yellow-200">problem-solving</span>{" "}
                and
                <span className="font-bold bg-yellow-200">
                  {" "}
                  analytical
                </span>{" "}
                thinking skills?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Is building{" "}
                <span className="font-bold bg-yellow-200"> confidence</span> and
                academic{" "}
                <span className="font-bold bg-yellow-200"> success</span>{" "}
                important to you?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Do you want your child to{" "}
                <span className="font-bold bg-yellow-200"> excel</span> in both
                school and future
                <span className="font-bold bg-yellow-200">
                  {" "}
                  competitive environments{" "}
                </span>
                ?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Are you looking for a fun, engaging way to enhance your child's
                <span className="font-bold bg-yellow-200">
                  {" "}
                  brain development{" "}
                </span>
                ?
              </span>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
              ></input>
              <span className="text-base">
                Does your child need help managing time and{" "}
                <span className="font-bold bg-yellow-200"> multitasking </span>
                effectively?
              </span>
            </div>

            {/* ... rest of the checkboxes ... */}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">
              If You Checked Two or More Boxes...
            </h3>
            <p className="font-medium">
              Your child is the{" "}
              <span className="font-bold bg-yellow-200">perfect candidate</span>{" "}
              for the Brainy Abacus Free Webinar!
            </p>
            <p>
              Equip them with{" "}
              <span className="font-bold bg-yellow-200">lifelong skills</span>,
              boost their{" "}
              <span className="font-bold bg-yellow-200">confidence</span>, and
              transform the way they approach learning.
            </p>
          </div>
          <div className="flex p-5">
            <button
              className="bg-red-600 p-4 text-lg text-white rounded-sm hover:bg-red-700 transition-colors duration-300 mx-auto"
              style={{
                animation: "pulse-scale 1.5s ease-in-out infinite",
              }}
            >
              Register Now!!
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 p-4 pt-6 border-2 mb-4 bg-[#024978] text-white rounded-sm">
          <div className="text-center mb-8 ">
            <h1 className="text-4xl md:text-4xl font-bold mb-2">
              Key Benefits
            </h1>
            <p className="text-lg md:text-xl font-semibold">
              Benefits Of This Course
            </p>
          </div>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`hidden-sub-point border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                visibleBenefits.includes(benefit.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <button
                onClick={() =>
                  setExpandedItem(
                    expandedItem === benefit.id ? null : benefit.id
                  )
                }
                className="w-full flex items-center gap-3 p-3 sm:gap-4 sm:p-4 text-left"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white">
                  {benefit.id}
                </div>
                <h3 className="font-semibold text-md sm:text-base">
                  {benefit.title}
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItem === benefit.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 pt-2">{benefit.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
