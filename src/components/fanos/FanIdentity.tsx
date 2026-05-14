"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target, Flame } from "lucide-react"

export default function FanIdentity({ xp }: { xp: number }) {
  const level = Math.floor(xp / 100)
  const currentLevelXp = xp % 100
  
  return (
    <div className="glass rounded-3xl p-8 border-white/5 bg-black/40 relative overflow-hidden group">
      {/* Animated Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-1000 animate-pulse-slow" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-cyan-500/50 p-1 bg-black/50">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
              <Shield className="w-10 h-10 text-white" />
              <motion.div 
                className="absolute inset-0 bg-white/10"
                animate={{ y: ["100%", "-100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-2 border border-dashed border-cyan-500/30 rounded-full" 
          />
        </div>

        <h2 className="text-2xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          TACTICAL GENIUS
        </h2>
        <p className="text-cyan-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-6">
          Level {level} Analyst
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <StatBox icon={<Zap className="w-3 h-3" />} label="HYPE" value={xp.toString()} color="text-yellow-400" />
          <StatBox icon={<Target className="w-3 h-3" />} label="PREDICT" value="92%" color="text-green-400" />
          <StatBox icon={<Flame className="w-3 h-3" />} label="STREAK" value="14d" color="text-orange-500" />
          <StatBox icon={<Shield className="w-3 h-3" />} label="AURA" value={xp > 3000 ? "GRAND" : "LEGEND"} color="text-purple-400" />
        </div>

        <div className="mt-8 w-full">
          <div className="flex justify-between text-[10px] font-mono mb-2">
            <span className="text-gray-500 uppercase">Level Progress</span>
            <span className="text-cyan-400">{currentLevelXp} / 100</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${currentLevelXp}%` }}
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatBox({ icon, label, value, color }: any) {
  return (
    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center hover:bg-white/10 transition-colors">
      <div className={cn("mb-1", color)}>{icon}</div>
      <span className="text-[9px] text-gray-500 uppercase font-mono mb-1">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  )
}

import { cn } from "@/lib/utils"
