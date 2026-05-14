"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Zap, Heart, TrendingUp, Share2 } from "lucide-react"
import Link from "next/link"

export default function FanWrapped() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-16">
          <Link href="/" className="text-sm font-mono text-gray-500 hover:text-white transition-colors">
            ← BACK TO SYSTEM
          </Link>
          <div className="text-right">
            <h1 className="text-2xl font-black italic tracking-tighter">FANOS // WRAPPED</h1>
            <p className="text-[10px] text-gray-500 font-mono">SEASON 2026 SUMMARY</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-cyan-400 font-mono text-xs uppercase tracking-widest"
              >
                Your Identity Evolved
              </motion.span>
              <h2 className="text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                THE MOMENTUM HUNTER
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              You didn't just watch. You felt every shift. Your engagement peaked during comebacks, putting you in the top 3% of tactical observers this season.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <WrappedStat icon={<Flame className="text-orange-500" />} label="Peak Streak" value="28 Days" />
              <WrappedStat icon={<Zap className="text-yellow-400" />} label="XP Gained" value="128.4k" />
              <WrappedStat icon={<Heart className="text-pink-500" />} label="Belief Score" value="94.2" />
              <WrappedStat icon={<TrendingUp className="text-cyan-400" />} label="Accuracy" value="88%" />
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-3"
            >
              <Share2 className="w-5 h-5" /> SHARE MY SEASON
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[2.5rem] bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px] shadow-[0_0_100px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full rounded-[2.4rem] bg-black overflow-hidden relative p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center font-black italic">F</div>
                </div>
                
                <div className="pt-12">
                  <div className="text-[10px] font-mono text-cyan-400 mb-2">SEASON RANK</div>
                  <div className="text-5xl font-black italic">ORACLE</div>
                </div>

                <div className="space-y-4">
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Top Faction</div>
                      <div className="text-xl font-bold">CHAOS ARMY</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Aura Level</div>
                      <div className="text-xl font-bold text-purple-400">MAXED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function WrappedStat({ icon, label, value }: any) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
      <div className="mb-2">{icon}</div>
      <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  )
}
