"use client"

import { motion } from "framer-motion"
import { Search, Bell, Settings, User, Play, Radio, Users } from "lucide-react"
import FanIdentity from "@/components/fanos/FanIdentity"
import EmotionalPulse from "@/components/fanos/EmotionalPulse"
import MatchInteraction from "@/components/fanos/MatchInteraction"

export default function Dashboard() {
  return (
    <main className="max-w-[1400px] mx-auto p-4 md:p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-black text-xl italic">
            F
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter">FANOS</h1>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              SYSTEMS ACTIVE // v2.0.4
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <HeaderIcon icon={<Search />} />
          <HeaderIcon icon={<Bell />} />
          <HeaderIcon icon={<Settings />} />
          <div className="h-10 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-3 pl-2 group cursor-pointer">
            <div className="text-right">
              <div className="text-xs font-bold group-hover:text-cyan-400 transition-colors">Sam.eth</div>
              <div className="text-[10px] text-gray-500 font-mono">RANK: ORACLE</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 p-0.5">
              <div className="w-full h-full rounded-full bg-cyan-900 flex items-center justify-center">
                <User className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Match & Interactions */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Broadcast Frame */}
          <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-black group">
            <img 
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              alt="Live Match"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            
            {/* Live Overlay */}
            <div className="absolute top-6 left-6 flex items-center gap-4">
              <div className="bg-red-600 px-3 py-1 rounded-md text-[10px] font-black tracking-widest flex items-center gap-2">
                <Radio className="w-3 h-3" /> LIVE
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1 rounded-md text-[10px] font-mono">
                MERCEDES ARENA // 24,050 SPECTATORS
              </div>
            </div>

            {/* Match HUD */}
            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <TeamInfo name="SHARKS" score="84" color="cyan" />
                <div className="text-4xl font-black italic text-gray-700">VS</div>
                <TeamInfo name="TITANS" score="79" color="purple" reverse />
              </div>
              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-3xl flex flex-col items-center min-w-[120px]">
                <div className="text-[10px] text-gray-400 font-mono mb-1 uppercase tracking-tighter">Quarter 4</div>
                <div className="text-2xl font-black font-mono tracking-widest text-cyan-400">04:32</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MatchInteraction />
            <EmotionalPulse />
          </div>
        </div>

        {/* Right Column: Identity & Progression */}
        <div className="lg:col-span-4 space-y-8">
          <FanIdentity />
          
          {/* AI Narratives Card */}
          <div className="glass rounded-3xl p-6 border-white/5 bg-gradient-to-br from-black/40 to-cyan-900/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <h3 className="font-bold">AI Narrative Insight</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed italic">
              "Your loyalty patterns show a 12% increase during high-pressure comebacks. You are currently aligning with the Underdog Army as the Sharks face a tactical defensive wall."
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500 uppercase">Alignment</span>
                <span className="text-cyan-400">CHAOS BELIEVER</span>
              </div>
            </div>
          </div>

          {/* Social Rivalry / Leaderboard */}
          <div className="glass rounded-3xl p-6 border-white/5 bg-black/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold flex items-center gap-2">
                <Users className="w-4 h-4" /> Global Factions
              </h3>
              <span className="text-[10px] text-gray-500 font-mono">LIVE</span>
            </div>
            <div className="space-y-4">
              <FactionRow name="Chaos Fans" percentage="42%" color="bg-pink-500" />
              <FactionRow name="Tactical Minds" percentage="31%" color="bg-cyan-500" />
              <FactionRow name="Underdog Army" percentage="27%" color="bg-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function HeaderIcon({ icon }: any) {
  return (
    <button className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
      {React.cloneElement(icon, { size: 18 })}
    </button>
  )
}

function TeamInfo({ name, score, color, reverse }: any) {
  return (
    <div className={cn("flex items-center gap-4", reverse ? "flex-row-reverse text-right" : "")}>
      <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-tr flex items-center justify-center font-black text-2xl", 
        color === 'cyan' ? 'from-cyan-900/40 to-cyan-400/20 text-cyan-400 border border-cyan-500/30' : 'from-purple-900/40 to-purple-400/20 text-purple-400 border border-purple-500/30'
      )}>
        {name[0]}
      </div>
      <div>
        <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">{name}</div>
        <div className="text-5xl font-black tracking-tighter">{score}</div>
      </div>
    </div>
  )
}

function FactionRow({ name, percentage, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-gray-400">{name}</span>
        <span>{percentage}</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: percentage }}
          className={cn("h-full", color)} 
        />
      </div>
    </div>
  )
}

import React from "react"
import { cn } from "@/lib/utils"
