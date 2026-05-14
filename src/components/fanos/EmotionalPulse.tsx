"use client"

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts"
import { Activity } from "lucide-react"

const data = [
  { time: "10'", pulse: 45, belief: 60 },
  { time: "20'", pulse: 52, belief: 55 },
  { time: "30'", pulse: 48, belief: 65 },
  { time: "40'", pulse: 70, belief: 40 },
  { time: "50'", pulse: 85, belief: 30 },
  { time: "60'", pulse: 65, belief: 50 },
  { time: "70'", pulse: 92, belief: 85 },
  { time: "80'", pulse: 78, belief: 90 },
  { time: "90'", pulse: 98, belief: 95 },
]

export default function EmotionalPulse() {
  return (
    <div className="glass rounded-3xl p-6 border-white/5 bg-black/20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-pink-500 animate-pulse" />
            Emotional Telemetry
          </h3>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-mono">
            Live Crowd Sentiment Analysis
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-pink-500">92%</div>
          <div className="text-[10px] text-pink-500/50 uppercase font-mono">Panic Threshold</div>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPulse" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBelief" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="pulse" 
              stroke="#ec4899" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPulse)" 
              animationDuration={2000}
            />
            <Area 
              type="monotone" 
              dataKey="belief" 
              stroke="#06b6d4" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBelief)" 
              animationDuration={3000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500" />
          <span className="text-[10px] text-gray-400 font-mono">ADRENALINE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500" />
          <span className="text-[10px] text-gray-400 font-mono">COLLECTIVE BELIEF</span>
        </div>
      </div>
    </div>
  )
}
