'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StickyCursor from '../components/StickyCursor';
import { Send, Check, BookOpen, Target, Users, Zap } from 'lucide-react';

const subscriptionTypes = [
 {
   id: 'career',
   title: 'Academy Newsletter',
   description: 'Career guidance and job opportunities',
   benefits: [
     {
       icon: BookOpen,
       title: 'Career Resources',
       description: 'Weekly CV templates and interview guides'
     },
     {
       icon: Users,
       title: 'Job Opportunities',
       description: 'Curated tech job listings and salary insights'
     },
     {
       icon: Target,
       title: 'Skill Development',
       description: 'Learning paths and technical tutorials'
     }
   ]
 },
 {
   id: 'industry',
   title: 'Investment Insider Newsletter',
   description: 'Tech trends and investment insights',
   benefits: [
     {
       icon: Zap,
       title: 'Market Trends',
       description: 'Weekly analysis of emerging technologies'
     },
     {
       icon: Target,
       title: 'Investment Updates',
       description: 'Startup funding and market opportunities'
     },
     {
       icon: Users,
       title: 'Industry Network',
       description: 'Connect with industry leaders and experts'
     }
   ]
 }
];

export default function SubscribeForm() {
 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
 const [message, setMessage] = useState('');
 const buttonRef = useRef(null);

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   if (selectedTypes.length === 0) {
     setStatus('error');
     setMessage('Please select at least one newsletter type');
     return;
   }

   setStatus('loading');

   try {
     const subscriptionPromises = selectedTypes.map(typeId => {
       const subscription = subscriptionTypes.find(type => type.id === typeId);
       if (!subscription) return Promise.resolve();

       return fetch(subscription.id === 'career' ? '/api/career-newsletter' : '/api/newsletter', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, name }),
       });
     });

     const responses = await Promise.all(subscriptionPromises);
     const allSuccessful = responses.every(response => response?.ok);

     if (allSuccessful) {
       setStatus('success');
       setMessage('Welcome aboard! Check your inbox for resources 🎉');
       setEmail('');
       setName('');
       setSelectedTypes([]);
     } else {
       throw new Error('Some subscriptions failed');
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

 const toggleSubscriptionType = (typeId: string) => {
   setSelectedTypes(prev => 
     prev.includes(typeId) 
       ? prev.filter(id => id !== typeId)
       : [...prev, typeId]
   );
 };

 return (
   <div className="relative min-h-screen bg-gradient-to-b from-[#2E294E] via-[#1B998B]/30 to-[#2E294E]/90 pt-40 pb-20 px-4 md:px-8 lg:px-12">
     <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
       <div className="absolute w-full h-full" style={{
         backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
         backgroundSize: '40px 40px'
       }}/>
     </div>

     <div className="max-w-6xl mx-auto">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="order-2 lg:order-1"
         >
           <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 relative overflow-hidden">
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1B998B]/30 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#2E294E]/30 rounded-full blur-3xl"></div>
             
             <div className="relative">
               <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
                 <span className="text-sm text-[#1B998B] font-medium">✨ Curated content for your interests</span>
               </div>
               
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                 Choose Your Updates
               </h2>
               
               <div className="space-y-4 mb-8">
                 {subscriptionTypes.map(type => (
                   <div
                     key={type.id}
                     onClick={() => toggleSubscriptionType(type.id)}
                     className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                       selectedTypes.includes(type.id)
                         ? 'bg-[#1B998B]/20 border-[#1B998B]'
                         : 'bg-white/5 border-white/10 hover:border-white/30'
                     }`}
                   >
                     <div className="flex items-center space-x-3">
                       <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                         selectedTypes.includes(type.id)
                           ? 'border-[#1B998B] bg-[#1B998B]'
                           : 'border-white/30'
                       }`}>
                         {selectedTypes.includes(type.id) && (
                           <Check className="w-3 h-3 text-white" />
                         )}
                       </div>
                       <div>
                         <h3 className="text-white font-medium">{type.title}</h3>
                         <p className="text-gray-400 text-sm">{type.description}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

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
                         <span>Subscribe Now</span>
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
                   Choose your interests and stay updated. Unsubscribe anytime.
                 </p>
               </div>
             </div>
           </div>
         </motion.div>

         <div className="order-1 lg:order-2">
           <div className="space-y-12">
             <div>
               <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                 Stay Ahead in Tech<br />
                 <span className="text-[#1B998B]">Choose Your Path</span>
               </h1>
               <p className="text-lg text-gray-300">
                 Get personalized updates on the topics that matter to you most.
               </p>
             </div>

             <div className="space-y-8">
               {selectedTypes.length === 0 ? (
                 <p className="text-gray-300">Select a newsletter type to see benefits</p>
               ) : (
                 selectedTypes.flatMap(typeId => {
                   const subscription = subscriptionTypes.find(type => type.id === typeId);
                   return subscription?.benefits.map((benefit, index) => (
                     <motion.div
                       key={`${typeId}-${benefit.title}`}
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
                   ));
                 })
               )}
             </div>

             <div className="flex flex-wrap gap-4">
               <div className="flex items-center space-x-2">
                 <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                   <Check className="w-4 h-4 text-[#1B998B]" />
                 </div>
                 <span className="text-gray-300">Curated content</span>
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
                 <span className="text-gray-300">Expert insights</span>
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