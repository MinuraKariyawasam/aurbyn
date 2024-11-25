"use client"
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What areas do you invest in?",
    answer: "We focus on AI & Machine Learning, FinTech Innovation, Enterprise SaaS, and Deep Tech, with typical investment sizes ranging from $1M to $10M in early-stage companies."
  },
  {
    question: "How do you support portfolio companies?",
    answer: "Beyond capital, we provide comprehensive support through our Aurbyn Network, including access to technical expertise, market insights, and strategic partnerships."
  },
  {
    question: "What makes Aurbyn different?",
    answer: "Our unique combination of deep technical expertise, global network, and founder-first approach enables us to be true partners in building transformative companies."
  },
  {
    question: "What is your investment process?",
    answer: "We follow a structured yet flexible process, starting with initial discussions, followed by deep technical and business diligence, and culminating in a partnership designed for long-term success."
  },
  {
    question: "How do you work with founders?",
    answer: "We believe in being active, supportive partners while respecting founder autonomy. Our team provides hands-on support in areas like technical development, go-to-market strategy, and talent acquisition."
  },
  {
    question: "What stage companies do you invest in?",
    answer: "We primarily invest in early-stage companies, from seed to Series B, with a focus on companies that are leveraging cutting-edge technology to solve significant problems."
  },
  {
    question: "What is your geographical focus?",
    answer: "While we have a global perspective and network, we focus on companies in major technology hubs across North America, Europe, and Asia."
  },
  {
    question: "What is the typical investment timeline?",
    answer: "From initial contact to investment, the process typically takes 6-12 weeks, depending on the stage and complexity of the opportunity."
  }
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const faqRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // FAQ items stagger animation
      faqRefs.current.forEach((faq, index) => {
        gsap.from(faq, {
          scrollTrigger: {
            trigger: faq,
            start: "top center+=100",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqRefs.current[index] = el}
              className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 flex items-center justify-between text-left
                  ${activeIndex === index ? 'bg-gray-50' : 'bg-white'}
                  transition-all duration-300`}
              >
                <span className={`text-lg font-medium ${activeIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 ${activeIndex === index ? 'text-primary' : 'text-gray-400'}`}>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-out
                  ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}