"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Shield, 
  ArrowUpRight, 
  Activity, 
  Globe, 
  LayoutGrid,
  Menu,
  ChevronRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const reviews = [
  {
    title: "Arsenal vs Man City: Tactical Blueprint",
    category: "Match Analysis",
    rating: 8.5,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    tags: ["Tactics", "Soccer"]
  },
  {
    title: "The Bellingham Paradigm",
    category: "Player Spotlight",
    rating: 9.2,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    tags: ["Scouting"]
  },
  {
    title: "The Soccer Paradox",
    category: "Theory",
    rating: 7.8,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
    tags: ["Coaching"]
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">
      {/* HUD Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#020202]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-5xl glass rounded-2xl px-6 py-3 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Target size={18} className="text-black stroke-[3px]" />
            </div>
            <span className="font-black text-xl tracking-tight uppercase italic text-white">TotalPitch</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            <a href="#" className="hover:text-brand transition-colors">Tactics</a>
            <a href="#" className="hover:text-brand transition-colors">Data</a>
            <a href="#" className="hover:text-brand transition-colors">Scouting</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="glass p-2 rounded-lg text-zinc-400 hover:text-white transition-all">
              <Menu size={16} />
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-brand transition-all">
              Connect
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-[10px] font-black text-brand tracking-[0.3em] uppercase mb-8">
                <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" /> Intelligence v2.4
              </span>
              <h1 className="text-7xl md:text-[120px] font-black leading-[0.8] tracking-tighter mb-10 text-white uppercase italic">
                Predictive <br/>
                <span className="text-brand">Soccer</span> Lab
              </h1>
              <p className="text-xl text-zinc-400 mb-12 max-w-lg font-medium leading-relaxed">
                High-frequency data modeling and tactical deconstruction for the elite soccer landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand text-black font-black rounded-xl hover:scale-105 transition-all uppercase tracking-tighter flex items-center gap-2">
                  Launch Terminal <Zap size={18} fill="currentColor" />
                </button>
                <button className="px-8 py-4 glass text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase tracking-tighter">
                  View Data Feed
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-square glass rounded-[40px] p-2 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover rounded-[32px] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Main"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-6 rounded-3xl backdrop-blur-3xl border-brand/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-brand uppercase tracking-widest">Live Stats</span>
                    <TrendingUp size={14} className="text-brand" />
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      className="h-full bg-brand" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Feed */}
      <section className="relative py-32 px-6 z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">The Intelligence Feed</h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mt-2">Verified match reports & tactical assets</p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand group">
              Historical DB <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Big Feature */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden glass rounded-3xl p-8 card-hover flex flex-col justify-end min-h-[500px]">
              <img 
                src={reviews[0].image}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000"
                alt="Feature"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] font-black text-brand tracking-widest uppercase mb-4 block">{reviews[0].category}</span>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">{reviews[0].title}</h3>
                <div className="flex gap-3">
                  <div className="glass px-4 py-2 rounded-xl text-2xl font-black text-white italic">{reviews[0].rating}</div>
                  <div className="flex items-center px-4 py-2 glass rounded-xl text-[10px] font-bold text-zinc-400 uppercase">Read More</div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass rounded-3xl p-8 card-hover flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand/10 rounded-2xl text-brand">
                  <Activity size={20} />
                </div>
                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Real-time</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white tabular-nums">2.4<span className="text-zinc-600">GB/s</span></div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mt-2">Data Throughput</div>
              </div>
            </div>

            {/* Small Review 1 */}
            <div className="group glass rounded-3xl p-6 card-hover flex flex-col gap-6">
              <div className="aspect-video rounded-2xl overflow-hidden relative border border-white/5">
                <img src={reviews[1].image} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all" alt="R2" />
              </div>
              <div>
                <span className="text-[9px] font-black text-brand uppercase tracking-widest block mb-2">{reviews[1].category}</span>
                <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight">{reviews[1].title}</h4>
              </div>
            </div>

            {/* Small Review 2 */}
            <div className="group glass rounded-3xl p-6 card-hover flex flex-col gap-6">
              <div className="aspect-video rounded-2xl overflow-hidden relative border border-white/5">
                <img src={reviews[2].image} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all" alt="R3" />
              </div>
              <div>
                <span className="text-[9px] font-black text-brand uppercase tracking-widest block mb-2">{reviews[2].category}</span>
                <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight">{reviews[2].title}</h4>
              </div>
            </div>

            {/* Global Card */}
            <div className="glass rounded-3xl p-8 card-hover flex items-center gap-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                <Globe size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-white">85+</div>
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Global Leagues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory */}
      <section className="relative py-40 px-6 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-brand" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">The Environment</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter italic leading-[0.8] uppercase">
              DEEP <br/>
              <span className="text-brand">ANALYSIS</span>
            </h3>
            <div className="grid gap-6">
              {[
                { icon: <Target size={20}/>, title: "Precision Scouting", desc: "Predictive modeling for elite transition play." },
                { icon: <BarChart3 size={20}/>, title: "Density Metrics", desc: "Structural integrity and block height analysis." },
                { icon: <Shield size={20}/>, title: "Secure Data", desc: "Proprietary processing of high-frequency match events." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 glass rounded-2xl card-hover border-white/5">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase italic tracking-tight">{item.title}</h5>
                    <p className="text-sm text-zinc-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full animate-pulse" />
            <div className="relative glass rounded-[40px] aspect-square flex items-center justify-center border-brand/20">
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-20 border-2 border-brand/10 border-dashed rounded-full" 
               />
               <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-40 border-2 border-white/5 border-dashed rounded-full" 
               />
               <Target size={80} className="text-brand opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-24 px-6 z-10 border-t border-white/5 bg-[#010101]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Target size={16} className="text-black stroke-[3px]" />
            </div>
            <span className="font-black text-xl tracking-tight uppercase italic text-white">TotalPitch</span>
          </div>
          <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
            &copy; 2026 EndurxLabs Hub
          </div>
          <div className="flex gap-10 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-brand transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand transition-colors">API</a>
            <a href="#" className="hover:text-brand transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
