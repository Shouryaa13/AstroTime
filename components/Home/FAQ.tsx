"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiMail, FiMessageSquare } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "What is AstroTime?",
      answer: "AstroTime is a comprehensive platform that provides accurate astronomical calculations, celestial event predictions, and detailed information about celestial bodies. It helps both amateur astronomers and professionals track and understand various astronomical phenomena.",
      category: "general"
    },
    {
      question: "How accurate are the astronomical calculations?",
      answer: "Our calculations are based on precise astronomical algorithms and NASA's JPL ephemeris data. We maintain high accuracy standards, typically within seconds for planetary positions and minutes for celestial events. Regular updates ensure our data remains current and reliable.",
      category: "technical"
    },
    {
      question: "Can I use AstroTime for astrophotography planning?",
      answer: "Yes! AstroTime is an excellent tool for astrophotography planning. It provides information about moon phases, dark sky periods, and optimal viewing conditions for various celestial objects. You can plan your photography sessions based on precise astronomical data.",
      category: "features"
    },
    {
      question: "Does AstroTime provide real-time celestial data?",
      answer: "Absolutely! AstroTime offers real-time tracking of celestial bodies including planets, stars, and satellites. Our live data feed updates every minute to give you the most current astronomical information.",
      category: "technical"
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, AstroTime is available as a web application optimized for mobile browsers. We're developing native iOS and Android apps which will be released later this year with additional features like AR sky mapping.",
      category: "platform"
    },
    {
      question: "What subscription plans are available?",
      answer: "We offer a free tier with basic features and two premium tiers: Pro ($9.99/month) and Enterprise ($29.99/month). Premium plans include advanced calculations, historical data, and API access.",
      category: "general"
    },
    {
      question: "How does AstroTime handle data privacy?",
      answer: "We take data privacy seriously. All personal data is encrypted, and we never share your information with third parties. Our privacy policy complies with GDPR and CCPA regulations.",
      category: "legal"
    },
    {
      question: "Can I integrate AstroTime with other applications?",
      answer: "Yes, we provide a comprehensive API for developers. Our documentation includes code samples for JavaScript, Python, and Ruby to help you integrate astronomical data into your applications.",
      category: "technical"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'features', name: 'Features' },
    { id: 'platform', name: 'Platform' },
    { id: 'legal', name: 'Legal' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openIndex !== null) {
        const ref = contentRefs.current[openIndex];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openIndex]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 text-sm font-semibold text-[#800000] bg-[#800000]/10 rounded-full mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Help Center
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about AstroTime and its features
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#800000] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              ref={el => contentRefs.current[index] = el}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              <button
                className={`w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none transition-colors duration-200 ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#800000]/10 to-[#800000]/20' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-[#800000]/10 flex items-center justify-center">
                      <span className="text-[#800000] font-medium">Q</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    {item.category && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium text-[#800000] bg-[#800000]/10 rounded-full">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                    )}
                  </div>
                </div>
                <motion.span 
                  className="ml-4 text-[#800000] text-xl"
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1,
                      height: 'auto',
                      transition: { 
                        opacity: { duration: 0.3 },
                        height: { duration: 0.4 } 
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      height: 0,
                      transition: { 
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3 } 
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-8 h-8 rounded-full bg-[#800000]/10 flex items-center justify-center">
                            <span className="text-[#800000] font-medium">A</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiMessageSquare className="w-6 h-6 text-[#800000]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Our support team is ready to help you with any additional questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-[#800000] text-white font-medium rounded-lg hover:bg-[#800000]/90 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <FiMail className="w-5 h-5" />
              Email Support
            </button>
            <button className="px-6 py-3 bg-white text-[#800000] font-medium rounded-lg hover:bg-[#800000]/10 transition-colors duration-300 shadow-sm border border-[#800000] hover:border-[#800000]/80 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.018 15.622 5 12c.018-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
              Video Tutorials
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;