import { motion } from "framer-motion";
import SwiftMaidAdmin from "../assets/swiftmaid-admin.png";
import SwiftMaidMain from "../assets/swiftmaid-main.png";
import Autosaas from "../assets/autosaas.png";
// import Tour9ja from "../assets/tour9ja.png";
import Bountip from "../assets/bountip.png";
import Mance from "../assets/mance.png";
import Kairos from "../assets/kairos.png";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kairos",
      description:
        "A Job search web application. Germini ai model integration and jobberman RSS feed integration",
      technologies: ["React", "Typescript", "NestJs", "PostgreSQL"],
      image: Kairos,
      liveUrl: "https://app.kairosng.com/",
      githubUrl: "#",
      status: "Live",
      category: "Job platform",
    },
    {
      id: 2,
      title: "SWIFTMAID Admin Dashbard",
      description:
        "Revamped a legacy cleaning service web app admin dashboard and api integration",
      technologies: ["React + TailwindCSS"],
      image: SwiftMaidAdmin,
      liveUrl: "http://admin.swiftmaid.co.uk/",
      githubUrl: "#",
      status: "Live",
      category: "Cleaning Service Admin Dashboard",
    },

    {
      id: 3,
      title: "SWIFTMAID ",
      description:
        "Revamped a legacy cleaning service web app. Backend api integrations and worldpay payment gateway integration",
      technologies: ["React + Boostrap"],
      image: SwiftMaidMain,
      liveUrl: "http://swiftmaid.co.uk/",
      githubUrl: "#",
      status: "Live",
      category: "Cleaning Service",
    },

    {
      id: 4,
      title: "AUTOSAAS",
      description:
        "A business consulting platform for innovative startup tech companies, featuring a rule-based AI agent for intelligent customer assistance.",
      technologies: ["React + TailwindCSS"],
      image: Autosaas,
      liveUrl: "https://autosaas.org/",
      githubUrl: "#",
      status: "Live",
      category: "Business Consult",
    },

    {
      id: 5,
      title: "Bountip",
      description:
        "A restaurant management platform. Implemented Table management features using react drag and drop.",
      technologies: ["Nextjs", "Nestjs", "PostgreSQL", "Stripe"],
      image: Bountip,
      liveUrl: "https://www.bountip.com/",
      githubUrl: "#",
      status: "Live",
      category: "Restaurant Management",
    },
    {
      id: 6,
      title: "MANCE",
      description: "A business performance platform with REST APIs.",
      technologies: ["PHP", "Laravel", "Next.js", "MySQL"],
      image: Mance,
      liveUrl: "https://www.mance.app/",
      githubUrl: "#",
      status: "Live",
      category: "Enterprise Resource Planning System",
    },

    // {
    //   id: 6,
    //   title: "Touring and Hotel Management System",
    //   description: "A tourism and hospitality platform",
    //   technologies: [
    //     "React",
    //     "Laravel",
    //     "MySQL",
    //     "Cloudinary",
    //     "Stripe",
    //     "PayStack",
    //   ],
    //   image: Tour9ja,
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   status: "In Development",
    //   category: "Tourism & Hospitality",
    // },
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
    <section id="projects" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in backend development, full-stack development and problem-solving
            capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Status badge for projects with images */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Code className="h-16 w-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Project Preview</p>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl === "#" && project.githubUrl === "#" && (
                    <span className="flex items-center gap-2 text-gray-500 px-4 py-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <motion.a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
