import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Terminal,
  Server,
  Globe,
  Palette,
  Layers,
  FileCode,
  Zap,
  Container,
  CloudUpload,
  Monitor
} from 'lucide-react';

const About = () => {
  const skills = {
    backend: [
      { name: 'PHP/Laravel', icon: Server, color: 'text-purple-600' },
      { name: 'Node.js/NestJS/Typescript', icon: Zap, color: 'text-green-600' },
      { name: 'Python/DRF', icon: FileCode, color: 'text-blue-600' },
    ],
    frontend: [
      { name: 'React.js', icon: Code, color: 'text-cyan-600' },
      { name: 'HTML/CSS', icon: Globe, color: 'text-orange-600' },
      { name: 'JavaScript', icon: FileCode, color: 'text-yellow-600' },
      { name: 'TailwindCSS', icon: Palette, color: 'text-teal-600' },
      { name: 'Bootstrap', icon: Layers, color: 'text-purple-600' },
    ],
    database: [
      { name: 'MySQL', icon: Database, color: 'text-blue-600' },
      { name: 'PostgreSQL', icon: Database, color: 'text-indigo-600' },
      { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    ],
    tools: [
      { name: 'AWS-EC2', icon: Cloud, color: 'text-orange-600' },
      { name: 'Cloudinary', icon: CloudUpload, color: 'text-blue-600' },
      { name: 'Docker', icon: Container, color: 'text-blue-500' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Fidelity technology(FIDTech), we are a passionate software engineer(s) with deep foresight for innovative solutions. 
            We thrive in communities with unique dreams of using innovative technology to simplify human 
            day-to-day activities and improve societal growth. Our expertise spans across multiple 
            technologies and platforms, enabling me to deliver robust, scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Backend Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Terminal className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
            </div>
            <div className="space-y-3">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <skill.icon className={`h-6 w-6 mr-3 ${skill.color}`} />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
            </div>
            <div className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <skill.icon className={`h-6 w-6 mr-3 ${skill.color}`} />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Database</h3>
            </div>
            <div className="space-y-3">
              {skills.database.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <skill.icon className={`h-6 w-6 mr-3 ${skill.color}`} />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Cloud */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Tools & Cloud</h3>
            </div>
            <div className="space-y-3">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <skill.icon className={`h-6 w-6 mr-3 ${skill.color}`} />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Dedicated to Excellence
            </h3>
            <p className="text-lg max-w-2xl mx-auto">
              With a commitment to clean code, innovative solutions, and continuous learning, 
              I bring passion and professionalism to every project I undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;