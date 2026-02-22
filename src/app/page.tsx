"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  BarChart3, 
  ChevronRight, 
  Star, 
  Calendar, 
  Search, 
  Zap, 
  Target,
  Shield
} from 'lucide-react';

const reviews = [
  {
    title: "Arsenal vs Man City: A Tactical Blueprint",
    category: "Match Analysis",
    rating: 8.5,
    author: "Ninsilka",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    tags: ["Tactics", "Premier League"]
  },
  {
    title: "The Bellingham Paradigm: Defining the #8",
    category: "Player Spotlight",
    rating: 9.2,
    author: "Ninsilka",
    date: "Feb 19, 2026",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    tags: ["Player Review", "La Liga"]
  },
  {
    title: "Inverted Wing-backs: The Soccer Paradox",
    category: "Theory",
    rating: 7.8,
    author: "Ninsilka",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
    tags: ["Coaching", "Trends"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-black text-black text-sm">TP</div>
            <span className="text-xl font-bold tracking-tighter uppercase italic">Total Pitch</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-emerald-400 transition-colors">Analysis</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Tactics</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Scouting</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">The Lab</a>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
          alt="Stadium"
        />
        
        {/* Animated Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full z-0" />

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="px-5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] tracking-[0.3em] font-black flex items-center gap-2 uppercase">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live Analysis Active
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-8 italic uppercase"
          >
            Total <br/>
            <span className="text-emerald-500">Pitch</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto font-medium"
          >
            Advanced intelligence for the soccer purist. We don't just review matches; we deconstruct the geometry of the game.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="group px-10 py-5 bg-white text-black font-black rounded-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 tracking-tighter uppercase text-sm">
              Enter The Lab <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-zinc-900/50 backdrop-blur-md text-white font-black rounded-sm border border-white/10 hover:border-emerald-500/50 transition-all tracking-tighter uppercase text-sm">
              View Tactical Feed
            </button>
          </motion.div>
        </div>
      </section>

      {/* Analytics Ribbon */}
      <div className="border-y border-white/5 bg-zinc-950/50 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Matches Reviewed", val: "1,240+" },
            { label: "Tactical Diagrams", val: "8.5k" },
            { label: "Player Profiles", val: "450" },
            { label: "Success Rate", val: "92%" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-bold">{stat.label}</div>
              <div className="text-2xl font-black text-emerald-500 tabular-nums">{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-xs font-black text-emerald-500 tracking-[0.4em] uppercase mb-4 flex items-center gap-2">
              <Zap size={14} /> Masterclass Analysis
            </h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase italic leading-none">The Intelligence Feed</h3>
          </div>
          <a href="#" className="group flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.2em]">
            Access Archive <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-12 group-hover:bg-emerald-500 transition-all" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-zinc-900 border border-white/5 transition-colors group-hover:border-emerald-500/30">
                <img 
                  src={review.image} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  alt={review.title}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Score Tag */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-emerald-500 flex flex-col items-center justify-center rounded-sm">
                  <span className="text-[10px] text-black font-black leading-none mb-0.5">SCORE</span>
                  <span className="text-lg text-black font-black leading-none">{review.rating}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[9px] font-black text-emerald-400 tracking-[0.3em] uppercase mb-2">
                    {review.category}
                  </div>
                  <h4 className="text-2xl font-black tracking-tighter uppercase italic leading-tight mb-4">
                    {review.title}
                  </h4>
                  <div className="flex gap-2">
                    {review.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-zinc-500 border border-zinc-500/30 px-2 py-0.5 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"/> {review.author}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Laboratory */}
      <section className="bg-zinc-900/20 border-y border-white/5 py-32 relative overflow-hidden">
        {/* Background Decorative element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-xs font-black text-emerald-500 tracking-[0.4em] uppercase mb-6">
              Laboratory Stats
            </h2>
            <h3 className="text-6xl font-black mb-8 tracking-tighter italic leading-[0.9] uppercase">
              THE DATA <br/>
              <span className="text-emerald-500 italic">ENVIRONMENT</span>
            </h3>
            <p className="text-zinc-500 text-lg mb-12 font-medium leading-relaxed max-w-md">
              Our proprietary engine tracks over 2,000 data points per match, transforming raw motion into predictive metrics.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Target size={20}/>, title: "Precision Mapping", desc: "Every touch, pass, and sprint mapped in 4K resolution." },
                { icon: <Shield size={20}/>, title: "Defensive Density", desc: "Advanced metrics on structural integrity and block height." },
                { icon: <Zap size={20}/>, title: "xG Efficiency", desc: "Deep reasoning behind shot quality and scoring potential." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/5 rounded flex items-center justify-center text-emerald-500 group-hover:border-emerald-500/50 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black tracking-tighter uppercase mb-1">{item.title}</h5>
                    <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full" />
             <div className="relative aspect-square bg-[#0a0a0a] border border-white/5 p-1 rounded-sm">
                <div className="w-full h-full border border-white/5 flex items-center justify-center relative overflow-hidden">
                   {/* Mock Grid Data Visual */}
                   <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                      {[...Array(36)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-emerald-500/20" />
                      ))}
                   </div>
                   <motion.div 
                     animate={{ 
                       rotate: [0, 90, 180, 270, 360],
                       scale: [1, 1.1, 1]
                     }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="w-64 h-64 border-2 border-emerald-500/20 rounded-full flex items-center justify-center italic font-black text-[100px] text-emerald-500/10 select-none"
                   >
                     TP
                   </motion.div>
                   <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            className="h-full bg-emerald-500" 
                          />
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-black text-black text-sm">TP</div>
              <span className="text-xl font-bold tracking-tighter uppercase italic">Total Pitch</span>
            </div>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
              The premier platform for advanced soccer intelligence. Engineering a new standard for match analysis and scouting reports.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h6 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6">Company</h6>
              <ul className="space-y-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-transparent hover:decoration-emerald-500">About</li>
                <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-transparent hover:decoration-emerald-500">Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-transparent hover:decoration-emerald-500">Newsletter</li>
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6">Legal</h6>
              <ul className="space-y-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-transparent hover:decoration-emerald-500">Privacy</li>
                <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-transparent hover:decoration-emerald-500">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 text-[10px] font-black text-zinc-700 text-center uppercase tracking-[0.3em]">
          &copy; 2026 Total Pitch Labs. All rights reserved. Engineering by EndurxLabs.
        </div>
      </footer>
    </main>
  );
}
