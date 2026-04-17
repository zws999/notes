import { motion } from 'motion/react';
import { Download, Zap, FolderTree, Sparkles } from 'lucide-react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AppMockup } from './components/AppMockup';
import { FeatureCard } from './components/FeatureCard';

export default function App() {
  const downloadUrl = 'https://github.com/USERNAME/REPOSITORY/releases/latest/download/Notes.exe';

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-indigo-600/30 blur-3xl" />
                <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  New Notes App is here!
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/70"
            >
              Try beta version
            </motion.p>
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={downloadUrl}
              download="Notes.exe"
              className="group relative inline-block"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button */}
              <div className="relative px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center gap-3 backdrop-blur-xl border border-white/20 group-hover:scale-105 transition-transform duration-300 shadow-2xl">
                <Download className="w-6 h-6" />
                <span className="text-xl font-semibold">Download Notes.exe</span>
              </div>
            </a>
          </motion.div>

          {/* App mockup */}
          <div className="pt-12">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Why choose Notes?
            </h2>
            <p className="text-xl text-white/60">
              Everything you need for a perfect note-taking experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Fast and lightweight"
              description="Lightning-fast performance with minimal resource usage. Notes opens instantly and stays out of your way."
              delay={0}
            />
            <FeatureCard
              icon={FolderTree}
              title="Clean note organization"
              description="Keep your thoughts organized with intuitive folders, tags, and search that actually works."
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="Simple and modern experience"
              description="Beautiful, distraction-free interface designed for focus. Just open and start writing."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <span className="text-lg font-semibold">Notes</span>
            </div>
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Notes App. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
