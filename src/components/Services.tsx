import { motion } from 'framer-motion';
import { Code, Server, Zap, Settings, Shield, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs. From web applications to mobile apps, I deliver scalable and maintainable code.',
      features: [
        'Full-stack web development',
        'Mobile application development',
        'Custom software solutions',
        'Code review and refactoring'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Server,
      title: 'Secure & Scalable RESTful APIs',
      description: 'Build robust APIs that power your applications. Focus on security, performance, and scalability to handle growing user demands.',
      features: [
        'RESTful API design',
        'Authentication & authorization',
        'Rate limiting & caching',
        'API documentation'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Third-party & AI Integration',
      description: 'Seamlessly integrate external services and AI capabilities into your applications to enhance functionality and user experience.',
      features: [
        'Payment gateway integration',
        'AI/ML model integration',
        'Social media APIs',
        'Cloud services integration'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      icon: Settings,
      title: 'System Optimization',
      description: 'Improve your existing systems performance, security, and maintainability through careful analysis and strategic improvements.',
      features: [
        'Performance optimization',
        'Database optimization',
        'Code refactoring',
        'Security auditing'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive software development services to help businesses 
            achieve their digital goals with innovative and reliable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and business goals',
                icon: Globe
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and architecture',
                icon: Settings
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with clean, scalable code',
                icon: Code
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launching your project with ongoing support',
                icon: Shield
              }
            ].map((process, index) => {
              const ProcessIcon = process.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <ProcessIcon className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with 
              professional software development services.
            </p>
            <motion.a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
