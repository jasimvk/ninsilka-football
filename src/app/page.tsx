"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Search, 
  Zap, 
  Target,
  Shield,
  ArrowUpRight,
  Activity,
  Globe,
  LayoutGrid
} from 'lucide-react';

const reviews = [
  {
    title: "Arsenal vs Man City: A Tactical Blueprint",
    category: "Match Analysis",
    rating: 8.5,
    author: "Lead Analyst",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    tags: ["Tactics", "Premier League"]
  },
  {
    title: "The Bellingham Paradigm: Defining the #8",
    category: "Player Spotlight",
    rating: 9.2,
    author: "Scouting Dept",
    date: "Feb 19, 2026",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    tags: ["Player Review", "La Liga"]
  },
  {
    title: "Inverted Wing-backs: The Soccer Paradox",
    category: "Theory",
    rating: 7.8,
    author: "Tactical Lab",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
    tags: ["Coaching", "Trends"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500 selection:text-black">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Target size={22} className="text-black" />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase tracking-tighter">Total Pitch</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Analysis</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Tactics</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Scouting</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">The Lab</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all">
              <Search size={18} />
            </button>
            <button className="px-6 py-2.5 bg-emerald-500 text-black text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all active:scale-95">
              Launch Pro
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Intelligence Platform</span>
            </div>
            <h1 className="text-7xl md:text-[110px] font-black leading-[0.8] tracking-tighter mb-10 uppercase">
              Predictive <br/>
              <span className="text-emerald-500 inline-block">Soccer</span> Lab
            </h1>
            <p className="text-xl text-zinc-400 mb-12 max-w-lg font-medium leading-relaxed">
              Deconstructing the geometry of the game through high-frequency data and advanced tactical modeling.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="group px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-emerald-400 transition-all flex items-center gap-3 tracking-tighter uppercase text-sm">
                Get Early Access <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all tracking-tighter uppercase text-sm">
                Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full animate-pulse" />
            <div className="relative bg-[#0a0a0a] border border-white/10 p-4 rounded-[40px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[30px] opacity-80 grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                alt="Tactical Board"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                <Zap size={40} fill="currentColor" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Activity className="text-emerald-500" />, label: "Live Data Throughput", value: "2.4 GB/s" },
            { icon: <Globe className="text-emerald-500" />, label: "Leagues Tracked", value: "85 Global" },
            { icon: <LayoutGrid className="text-emerald-500" />, label: "Tactical Engines", value: "PRO-V4" },
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-3xl font-black">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Intelligence Feed */}
      <section className="max-w-7xl mx-auto px-6 py-32 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-none mb-6">The Feed</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Real-time match deconstructions</p>
          </div>
          <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-emerald-500 hover:text-white transition-colors group">
            Browse All Reports <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div 
              whileHover={{ y: -12 }}
              key={i} 
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-8 border border-white/10 bg-[#0a0a0a]">
                <img 
                  src={review.image} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  alt={review.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-8 left-8 bg-emerald-500 px-4 py-2 rounded-2xl font-black text-black text-sm">
                  {review.rating}
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[9px] font-black text-emerald-500 tracking-[0.4em] uppercase mb-3 block">{review.category}</span>
                  <h4 className="text-3xl font-black tracking-tighter uppercase italic leading-[0.9] mb-6">{review.title}</h4>
                  <div className="flex gap-2">
                    {review.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-40 z-10 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-[0.85]">
          Ready to Upgrade <br/>Your <span className="text-emerald-500">Perspective?</span>
        </h2>
        <button className="px-12 py-6 bg-emerald-500 text-black font-black rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:scale-105 hover:shadow-emerald-500/50 transition-all uppercase tracking-tighter text-lg">
          Join Total Pitch Pro
        </button>
      </section>

      <footer className="py-20 border-t border-white/5 bg-black z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Target className="text-emerald-500" size={24} />
            <span className="text-xl font-black tracking-tight uppercase italic">Total Pitch</span>
          </div>
          <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
            &copy; 2026 EndurxLabs Ecosystem
          </div>
          <div className="flex gap-8 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Intelligence</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
