import { motion } from "motion/react";
import { ArrowRight, Brain, Users, Smartphone } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-6 font-semibold">Evolution 001 / Parenting</p>
          <h1 className="text-6xl lg:text-9xl font-normal leading-[0.9] mb-8 text-art-ink max-w-2xl">
            Raise your child with <span className="serif-italic">science</span>.
          </h1>
          <p className="text-lg lg:text-xl text-art-muted mb-12 leading-relaxed max-w-xl font-light">
            LittleCortex delivers neuroscience-backed micro-lessons for parents and children together — and an accountability mechanic that turns insight into real behaviour change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-16">
            <Button className="w-full sm:w-auto">
              Join Waitlist
            </Button>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-art-muted mb-1">Status</span>
              <span className="text-sm serif-italic text-art-accent">Early Access Open</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-art-border pt-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-art-muted mb-2">Method</p>
              <p className="text-sm serif-italic">Neuroscience Curriculum</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-art-muted mb-2">System</p>
              <p className="text-sm serif-italic">Parent + Child Learning</p>
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
          {/* Arched Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[600px] bg-gradient-to-b from-art-border to-transparent rounded-t-[240px] z-0 hidden lg:block" />
          
          {/* Phone Mockups */}
          <div className="relative z-10 flex gap-4 lg:flex-col lg:gap-8">
            {/* Parent Phone */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-[240px] h-[480px] bg-art-bg rounded-[2.5rem] border border-art-border shadow-2xl overflow-hidden relative p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-[8px] uppercase tracking-widest text-art-muted mb-2">Parent Insight</p>
                <h3 className="text-lg font-serif italic leading-tight mb-4">Neural Pathways & Escalation</h3>
              </div>
              <div className="flex-grow bg-art-border/50 rounded-2xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-art-accent/20 to-transparent opacity-30" />
              </div>
              <div className="h-1 w-full bg-art-accent/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-art-accent" 
                />
              </div>
            </motion.div>

            {/* Child Phone */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-[240px] h-[480px] bg-art-bg rounded-[2.5rem] border border-art-border shadow-2xl overflow-hidden relative p-6 flex flex-col justify-between lg:-translate-x-12"
            >
              <div>
                <p className="text-[8px] uppercase tracking-widest text-art-muted mb-2">Child Quest</p>
                <h3 className="text-lg font-serif italic leading-tight mb-4">The Feelings Map</h3>
              </div>
              <div className="flex-grow bg-art-accent/5 rounded-2xl mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-art-accent/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-art-accent/20 animate-pulse" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-6 bg-art-border rounded-md" />
                <div className="h-6 bg-art-border rounded-md" />
                <div className="h-6 bg-art-border rounded-md" />
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
