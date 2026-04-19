import { motion } from "motion/react";
import { ArrowRight, Brain, Users, Smartphone } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-normal leading-[1] md:leading-[0.9] mb-8 text-art-ink max-w-4xl tracking-tight">
            Little Cortex — <span className="serif-italic">Earn your phone.</span> <br className="hidden md:block" />
            Understand your brain.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-art-muted mb-12 leading-relaxed max-w-2xl font-light">
            Little Cortex is a screen time app for families. Your child completes tasks to unlock their phone — just like other apps. What's different is that they also learn something real about why doing hard things is good for their developing brain. <span className="text-art-ink font-normal">Less arguing. More understanding.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-16">
            <Button className="w-full sm:w-auto">
              Join the Waitlist
            </Button>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-art-muted mb-1">Status</span>
              <span className="text-sm serif-italic text-art-accent">Early Access Open</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 border-t border-art-border pt-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-art-muted mb-2">Mechanic</p>
              <p className="text-sm serif-italic">Task → Unlock</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-art-muted mb-2">Ages</p>
              <p className="text-sm serif-italic">8 to 14</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-art-muted mb-2">Tech</p>
              <p className="text-sm serif-italic">Apple FamilyControls</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Phone Mockups */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-8 lg:translate-x-12 scale-[0.85] sm:scale-100 origin-center sm:origin-right">
            {/* Child Phone - Left Screen */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-[280px] h-[580px] bg-art-bg rounded-[3rem] border border-art-border shadow-2xl overflow-hidden relative p-6 sm:p-8 flex flex-col border-t-[3px] border-b-[3px]"
            >
              <div className="mb-8 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-art-muted font-bold tracking-widest leading-normal">Your phone is locked</p>
              </div>
              
              <div className="flex-grow space-y-6 flex flex-col">
                <div className="p-4 bg-art-ink/5 border border-art-border rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif italic text-art-ink">Tidy your room</h4>
                  </div>
                  <div className="w-5 h-5 rounded border border-art-border flex items-center justify-center">
                    {/* Unchecked box */}
                  </div>
                </div>

                {/* Illustrated Brain Card */}
                <div className="flex-grow p-6 bg-art-ink/5 border border-art-border rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-full aspect-square relative mb-6">
                    {/* Brain Illustration SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Stylized Brain Outlines */}
                      <path 
                        d="M20,50 Q20,20 50,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="text-art-muted/20"
                      />
                      {/* Impulse Area - Glowing */}
                      <circle cx="65" cy="45" r="12" fill="currentColor" className="text-art-accent/40 animate-pulse blur-md" />
                      <circle cx="65" cy="45" r="5" fill="currentColor" className="text-art-accent" />
                      <text x="65" y="65" className="text-[5px] fill-art-accent font-bold text-center" textAnchor="middle">IMPULSE</text>
                      
                      {/* Control Area - Smaller */}
                      <circle cx="35" cy="40" r="4" fill="currentColor" className="text-art-ink/20" />
                      <text x="35" y="55" className="text-[5px] fill-art-muted font-bold tracking-widest text-center" textAnchor="middle">CONTROL</text>
                    </svg>
                  </div>
                  <p className="text-[11px] text-art-ink leading-relaxed font-light text-center px-2">
                    Every time you do something hard first, the <span className="text-art-accent font-bold">Control</span> part gets stronger. That's literally what's happening right now.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-art-border">
                <button className="w-full py-4 bg-art-ink text-art-bg text-[10px] uppercase tracking-[0.3em] font-bold">
                  Mark as done →
                </button>
              </div>
            </motion.div>

            {/* Parent Phone - Right Screen */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-[280px] h-[580px] bg-art-bg rounded-[3rem] border border-art-border shadow-2xl overflow-hidden relative p-6 sm:p-8 flex flex-col border-t-[3px] border-b-[3px] sm:translate-y-12"
            >
              <div className="mb-8 text-center border-b border-art-border pb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-art-muted font-bold">Today's update</p>
              </div>

              <div className="flex-grow space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-serif italic text-art-ink">Tidy their room</h4>
                    <span className="text-[8px] uppercase tracking-widest text-art-muted font-bold px-2 py-1 bg-art-border rounded-full">Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-art-accent font-bold px-2 py-1 border border-art-accent/30 rounded-full">Phone status: Locked</span>
                  </div>
                </div>

                <div className="p-6 bg-art-ink/5 border border-art-border rounded-2xl relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-4 h-4 text-art-accent" />
                    <p className="text-[10px] uppercase tracking-widest text-art-muted font-bold">Why this works</p>
                  </div>
                  <p className="text-[11px] text-art-muted leading-relaxed font-light">
                    The prefrontal cortex, which controls impulse and decision-making, is still forming right now. The daily practice of completing tasks before accessing rewards directly supports its development. <span className="text-art-ink">You're not just enforcing a rule. You're doing something that's backed by science.</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 p-4 bg-art-accent/5 rounded-xl border border-art-accent/10">
                  <Smartphone className="w-4 h-4 text-art-accent/50" />
                  <p className="text-[10px] text-art-muted">Photo proof required on completion</p>
                </div>
              </div>

              <div className="mt-8 pt-4 flex justify-center">
                <span className="text-[10px] uppercase tracking-widest text-art-muted flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-art-accent" />
                  Science note · 45 seconds
                </span>
              </div>
            </motion.div>
          </div>

          {/* Circle CTA */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-art-accent rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest text-center p-4 text-art-accent leading-tight hidden lg:flex">
            Explore<br/>Science
          </div>
        </motion.div>
      </div>
    </section>
  );
}
