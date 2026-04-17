import { motion } from 'motion/react';
import { FileText, Star, Tag, Clock } from 'lucide-react';

export function AppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 blur-3xl rounded-3xl" />
        
        {/* Main mockup container with glassmorphism */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-sm text-white/60">
              Notes.exe
            </div>
          </div>

          {/* App content */}
          <div className="flex h-[400px]">
            {/* Sidebar */}
            <div className="w-64 bg-white/5 border-r border-white/10 p-4 space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <FileText className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-white/90">All Notes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                <Star className="w-4 h-4 text-white/60" />
                <span className="text-sm text-white/70">Favorites</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                <Tag className="w-4 h-4 text-white/60" />
                <span className="text-sm text-white/70">Tags</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-sm text-white/70">Recent</span>
              </div>
            </div>

            {/* Note list */}
            <div className="w-80 bg-white/[0.02] border-r border-white/10 p-4 space-y-3">
              {['Meeting Notes', 'Project Ideas', 'Shopping List'].map((title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`p-3 rounded-lg border ${
                    i === 0
                      ? 'bg-white/10 border-white/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 transition-colors'
                  }`}
                >
                  <div className="text-sm text-white/90 mb-1">{title}</div>
                  <div className="text-xs text-white/50">
                    {i === 0 ? '2 hours ago' : i === 1 ? 'Yesterday' : '3 days ago'}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note content */}
            <div className="flex-1 p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <div className="text-xl text-white/90">Meeting Notes</div>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="h-2 bg-white/10 rounded w-full" />
                  <div className="h-2 bg-white/10 rounded w-5/6" />
                  <div className="h-2 bg-white/10 rounded w-4/6" />
                  <div className="h-2 bg-white/10 rounded w-full mt-4" />
                  <div className="h-2 bg-white/10 rounded w-3/6" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
