"use client";

import React from 'react';
import { Trophy, Users, BarChart3, ChevronRight, PlayCircle, Star, Calendar } from 'lucide-react';

const reviews = [
  {
    title: "Arsenal vs Man City: Tactical Masterclass",
    category: "Match Review",
    rating: 8.5,
    author: "Ninsilka",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Rise of Bellingham: Midfield Evolution",
    category: "Player Spotlight",
    rating: 9.2,
    author: "Ninsilka",
    date: "Feb 19, 2026",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Modern Full-backs: Inverting the Game",
    category: "Tactics",
    rating: 7.8,
    author: "Ninsilka",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-10000 hover:scale-100"
          alt="Stadium"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium flex items-center gap-2">
              <Trophy size={14} /> LIVE REVIEWS
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            NINSILKA <br/>FOOTBALL
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Deep tactical analysis, player evolution tracking, and raw match reviews for the true football purist.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              READ LATEST REVIEW <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
              BROWSE TACTICS
            </button>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Reviews</h2>
            <p className="text-zinc-500">The most discussed matches of the week</p>
          </div>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-4">
            View Archive
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-zinc-800">
                <img 
                  src={review.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  alt={review.title}
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                  {review.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-500 text-black px-2 py-1 rounded font-black flex items-center gap-1">
                  <Star size={12} fill="black" /> {review.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {review.title}
              </h3>
              <div className="flex items-center gap-4 text-zinc-500 text-sm">
                <span className="flex items-center gap-1"><Users size={14} /> {review.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tactics Board */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-6 tracking-tighter">THE TACTICAL BOARD</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              We break down the game beyond the goals. Understand passing lanes, defensive block heights, and the xG math that defines modern elite football.
            </p>
            <ul className="space-y-4">
              {[
                "Data-driven heatmaps for every player",
                "Advanced metrics (PPDA, xG, xA)",
                "Managerial philosophy analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-full" />
             <div className="relative aspect-square bg-emerald-950/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                <BarChart3 size={120} className="text-emerald-500 opacity-20 absolute" />
                <div className="grid grid-cols-3 gap-4 w-full p-8">
                   {[...Array(9)].map((_,i) => (
                     <div key={i} className="h-24 bg-zinc-800/50 rounded-lg border border-zinc-700/50 flex items-end p-2">
                        <div className="w-full bg-emerald-500" style={{ height: `${Math.random() * 80 + 20}%` }} />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        &copy; 2026 Ninsilka Football Review. Powered by EndurxLabs.
      </footer>
    </main>
  );
}
