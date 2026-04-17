import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-indigo-600/0 group-hover:from-purple-600/10 group-hover:via-blue-600/10 group-hover:to-indigo-600/10 rounded-2xl blur-xl transition-all duration-500" />
      
      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/20">
        {/* Icon container with glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-lg" />
          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-purple-300" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl text-white/90 mb-3">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
