import React from 'react';
import { Brain, Code, Database, GitBranch, Globe, Cpu, MessageSquare, Sparkles } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Cpu className="w-16 h-16 mx-auto mb-8 text-blue-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI/ML Professional
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforming the future through artificial intelligence and machine learning solutions
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all">
              View Projects
            </button>
            <button className="px-8 py-3 border border-blue-400 hover:bg-blue-600/20 rounded-full transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Deep Learning",
                description: "Specialized in neural networks and deep learning architectures"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Big Data Analytics",
                description: "Processing and analyzing large-scale datasets"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "NLP",
                description: "Natural Language Processing and text analysis"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Computer Vision",
                description: "Image recognition and visual data processing"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "MLOps",
                description: "Machine Learning operations and deployment"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "AI Development",
                description: "End-to-end AI solution development"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all">
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Project
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
                alt="AI Project Visualization" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Decision System</h3>
              <p className="text-gray-400 mb-6">
                An advanced AI system that leverages deep learning and reinforcement learning 
                to make autonomous decisions in complex environments.
              </p>
              <ul className="space-y-3 mb-8">
                {['TensorFlow', 'PyTorch', 'Computer Vision', 'Reinforcement Learning'].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-12">
            Interested in collaborating or learning more about my work in AI/ML? 
            Let's discuss how we can innovate together.
          </p>
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 AI/ML Professional. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;