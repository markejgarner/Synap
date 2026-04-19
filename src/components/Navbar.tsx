import { motion } from "motion/react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-art-bg/80 backdrop-blur-md border-b border-art-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start leading-[0.8] pr-6 mr-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-art-accent font-bold mb-1">Little</span>
            <span className="text-xl font-serif italic uppercase tracking-[0.1em] text-art-ink">Cortex</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-semibold text-art-muted">
          <a href="#" className="hover:text-art-accent transition-colors">Science</a>
          <a href="#" className="hover:text-art-accent transition-colors">Mechanism</a>
          <a href="#" className="hover:text-art-accent transition-colors">Waitlist</a>
        </div>

        <div>
          <Button variant="outline" className="px-6 py-2 text-[10px]">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}
