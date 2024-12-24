'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StickyCursor from '../components/StickyCursor';
import { Send, Check, BookOpen, Target, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Career Resources',
    description: 'CV templates, interview prep guides, and salary insights'
  },
  {
    icon: BookOpen,
    title: 'Weekly Updates',
    description: 'Latest tech job opportunities and skill requirements'
  },
  {
    icon: Users,
    title: 'Student Network',
    description: 'Connect with peers and industry mentors'
  }
];

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const buttonRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/career-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Welcome aboard! Check your inbox for resources 🎉');
        setEmail('');
        setName('');
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#2E294E] via-[#1B998B]/30 to-[#2E294E]/90 pt-40 pb-20 px-4 md:px-8 lg:px-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1B998B]/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#2E294E]/30 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
                  <span className="text-sm text-[#1B998B] font-medium">✨ Free resources included</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get Weekly Tech Career Updates
                </h2>
                
                <p className="text-gray-300 mb-8">
                  Join 1000+ students receiving weekly career guidance, job opportunities, 
                  and learning resources.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl 
                        text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-[#1B998B]/50 focus:border-transparent
                        transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl 
                        text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-[#1B998B]/50 focus:border-transparent
                        transition-all duration-300"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <motion.button
                    ref={buttonRef}
                    type="submit"
                    disabled={status === 'loading'}
                    className="relative w-full bg-[#1B998B] text-white py-5 rounded-xl font-medium
                      hover:bg-[#1B998B]/90 focus:outline-none focus:ring-2 focus:ring-[#1B998B] focus:ring-offset-2 
                      disabled:opacity-50 disabled:cursor-not-allowed group
                      transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {status === 'loading' ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      ) : status === 'success' ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Check your inbox!</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Resources</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center text-sm ${
                        status === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {message}
                    </motion.div>
                  )}
                </form>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 text-center">
                    Join 1000+ students getting weekly updates. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Tech Career Resources<br />
                  <span className="text-[#1B998B]">Made for Students</span>
                </h1>
                <p className="text-lg text-gray-300">
                  Get the latest insights, resources, and opportunities delivered straight to your inbox.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B998B]/20 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-[#1B998B]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#1B998B]" />
                  </div>
                  <span className="text-gray-300">Weekly updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#1B998B]" />
                  </div>
                  <span className="text-gray-300">Free resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#1B998B]" />
                  </div>
                  <span className="text-gray-300">Career guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickyCursor stickyElement={buttonRef} />
    </div>
  );
}