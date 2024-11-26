"use client"
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What types of companies do you invest in?",
    answer: "We focus on early-stage technology companies, primarily in AI/ML, blockchain, developer tools, and emerging tech sectors. We look for strong technical founders building innovative solutions with clear market potential."
  },
  {
    question: "What are your typical investment terms?",
    answer: "We typically invest between $500K to $2M in pre-seed to Series A rounds. Our terms are founder-friendly and standardized, focusing on clear alignment between founders and investors."
  },
  {
    question: "How do you support portfolio companies?",
    answer: "Beyond capital, we provide technical expertise, strategic guidance, and access to our network of industry experts and potential customers. Our team has hands-on experience in building and scaling technology companies."
  },
  {
    question: "What is your investment process?",
    answer: "Our process typically takes 4-6 weeks, involving initial screening, technical deep dive, market analysis, and founder discussions. We aim to be transparent and efficient throughout the process."
  },
  {
    question: "Do you lead rounds?",
    answer: "Yes, we can lead or co-lead rounds. We also work closely with other investors in our network to help companies build strong syndicates."
  },
  {
    question: "What makes Aurbyn different?",
    answer: "Our technical expertise, founder-first approach, and focus on practical support sets us apart. We're building a new kind of VC firm that truly understands and supports technical founders."
  },
  {
    question: "How do you work with founders post-investment?",
    answer: "We maintain regular engagement with portfolio companies, offering support in areas like technical development, go-to-market strategy, and talent acquisition. Our involvement is always founder-driven."
  },
  {
    question: "What is your geographical focus?",
    answer: "We primarily invest in companies based in major technology hubs across North America, with a particular focus on the US and Canada. We're open to exceptional opportunities globally."
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

  const toggleFAQ = (index: number | null) => {
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