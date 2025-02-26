import React from 'react';
import { Download, Award, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

function Profile() {
  return (
    <div className="pt-16">
      {/* Profile Header with Background */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Dr. Alex Anderson</h1>
              <p className="text-xl text-gray-400 mb-6">AI Research Scientist & Machine Learning Engineer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="/cv.pdf" 
                  download 
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="flex items-center gap-2 px-6 py-3 border border-blue-400 hover:bg-blue-600/20 rounded-full transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Professional Background</h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed">
                  With over a decade of experience in artificial intelligence and machine learning, 
                  I've dedicated my career to pushing the boundaries of what's possible in AI. My expertise 
                  spans across deep learning, reinforcement learning, and their practical applications in 
                  solving complex real-world challenges.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  As a lead AI researcher at TechCorp, I spearhead cutting-edge projects in:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Neural Architecture Design</li>
                  <li>Reinforcement Learning Systems</li>
                  <li>Computer Vision Applications</li>
                  <li>Natural Language Processing</li>
                  <li>MLOps and AI Infrastructure</li>
                </ul>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  My research has been published in top-tier conferences including ICML, NeurIPS, and ICLR, 
                  contributing to significant advancements in autonomous systems and adaptive learning algorithms.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Award className="w-8 h-8" />, title: "Awards", value: "15+", desc: "International Recognition" },
                  { icon: <BookOpen className="w-8 h-8" />, title: "Publications", value: "25+", desc: "Peer-reviewed Papers" },
                  { icon: <Users className="w-8 h-8" />, title: "Team Size", value: "20+", desc: "Research Engineers" },
                  { icon: <Briefcase className="w-8 h-8" />, title: "Projects", value: "50+", desc: "Successful Deployments" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 bg-gray-800/50 rounded-xl text-center hover:bg-gray-800/70 transition-all">
                    <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.title}</div>
                    <div className="text-sm text-gray-500 mt-2">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    role: "Lead AI Researcher",
                    company: "TechCorp",
                    period: "2020 - Present",
                    description: "Leading AI research initiatives and managing a team of ML engineers. Developed breakthrough algorithms in reinforcement learning and computer vision."
                  },
                  {
                    role: "Senior ML Engineer",
                    company: "AI Solutions Inc.",
                    period: "2017 - 2020",
                    description: "Architected and deployed large-scale machine learning systems. Led the development of production-ready deep learning models."
                  },
                  {
                    role: "Research Scientist",
                    company: "Innovation Labs",
                    period: "2014 - 2017",
                    description: "Conducted foundational research in deep learning and computer vision. Published multiple papers in top-tier conferences."
                  }
                ].map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-400">
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full left-[-9px] top-0"></div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-blue-400 mb-2">{exp.company} | {exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                {[
                  {
                    degree: "Ph.D. in Computer Science",
                    school: "Stanford University",
                    period: "2010 - 2014",
                    description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on 'Adaptive Neural Architectures for Autonomous Systems'"
                  },
                  {
                    degree: "M.S. in Computer Science",
                    school: "MIT",
                    period: "2008 - 2010",
                    description: "Focus on Algorithms and Computational Theory. Research in distributed machine learning systems."
                  },
                  {
                    degree: "B.S. in Computer Engineering",
                    school: "UC Berkeley",
                    period: "2004 - 2008",
                    description: "Minor in Mathematics. Graduated with highest honors. Early research in neural networks."
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-400">
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full left-[-9px] top-0"></div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-blue-400 mb-2">{edu.school} | {edu.period}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;