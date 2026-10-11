'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/data/studio-data';

interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  // Determine layout col-span based on gridSpan
  const getColSpanClass = () => {
    switch (project.gridSpan) {
      case 'two-thirds':
        return 'lg:col-span-8';
      case 'one-third':
        return 'lg:col-span-4';
      case 'half':
        return 'lg:col-span-6';
      case 'full':
        return 'lg:col-span-12';
      default:
        return 'lg:col-span-6';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`col-span-12 ${getColSpanClass()} group relative flex flex-col`}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor="VIEW"
        className="block relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F141C] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        {/* Aspect Ratio Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden">
          <Image
            src={project.heroImage || '/studio-assets/hero-spatial-installation.jpg'}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          {/* Dark gradient & atmospheric vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C11] via-[#080C11]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Top category */}
          <div className="absolute top-5 left-5 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-white/90 border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Floating arrow icon in top right corner on hover */}
          <div className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Content beneath image */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-transparent to-[#080C11]">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00A9CE] transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed font-normal line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {(project.technicalCapabilities || []).slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
