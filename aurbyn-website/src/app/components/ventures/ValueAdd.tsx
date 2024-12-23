"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ValueAdd = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const services = [
    {
      title: "Strategic Growth Support",
      description: "Access our network of industry experts, potential customers, and strategic partners to accelerate your growth trajectory.",
      icon: "⚡️",
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Operational Excellence",
      description: "Hands-on support in key operational areas including talent acquisition, product development, and go-to-market strategy.",
      icon: "🚀",
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Capital Network",
      description: "Strong relationships with leading global investors to support your future funding rounds and strategic opportunities.",
      icon: "💫",
      color: "from-violet-500/10 to-purple-500/10"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
          >
            Value-Add Partnership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600/90 max-w-2xl mx-auto font-light"
          >
            Beyond capital, we provide comprehensive support to help you scale effectively
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ y: cardsY }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              {/* Background gradient and effects */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />
              
              {/* Content */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-600/90 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueAdd;