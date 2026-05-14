"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Flame, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MatchInteraction({ onAction }: { onAction: (xp: number) => void }) {
  const [activeTab, setActiveTab] = useState("live")
  
  return (
    <div className="glass rounded-3xl p-6 border-white/5 bg-black/20 overflow-hidden relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Match Dynamics
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab("live")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all",
              activeTab === "live" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-gray-500 border border-transparent"
            )}
          >
            LIVE
          </button>
          <button 
            onClick={() => setActiveTab("intel")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all",
              activeTab === "intel" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" : "text-gray-500 border border-transparent"
            )}
          >
            INTEL
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <InteractionCard 
          icon={<Zap className="w-4 h-4 text-yellow-400" />}
          title="Momentum Shift?"
          desc="The underdog is showing signs of a tactical pivot."
          action="BOOST BELIEF"
          color="yellow"
          onClick={() => onAction(12)}
        />
        <InteractionCard 
          icon={<Flame className="w-4 h-4 text-orange-500" />}
          title="Pressure Surge"
          desc="High intensity detected in the final sector."
          action="CHANNEL ENERGY"
          color="orange"
          onClick={() => onAction(25)}
        />
        <InteractionCard 
          icon={<Trophy className="w-4 h-4 text-cyan-400" />}
          title="Glory Path"
          desc="82% likelihood of a historical comeback."
          action="PLEDGE LOYALTY"
          color="cyan"
          onClick={() => onAction(50)}
        />
      </div>
    </div>
  )
}

function InteractionCard({ icon, title, desc, action, color, onClick }: any) {
  const colorMap: any = {
    yellow: "hover:border-yellow-500/30 hover:bg-yellow-500/5",
    orange: "hover:border-orange-500/30 hover:bg-orange-500/5",
    cyan: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "p-4 rounded-2xl border border-white/5 bg-white/5 transition-all cursor-pointer group",
        colorMap[color]
      )}
    >
      <div className="flex gap-4 items-start">
        <div className="mt-1 p-2 rounded-lg bg-black/40 border border-white/10 group-hover:border-white/20">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold text-sm">{title}</h4>
            <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              ACTIVATE
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            {desc}
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                className={cn("h-full", 
                  color === 'yellow' ? 'bg-yellow-400' : 
                  color === 'orange' ? 'bg-orange-500' : 'bg-cyan-400'
                )} 
              />
            </div>
            <span className="text-[10px] font-bold text-gray-500">+12 XP</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
