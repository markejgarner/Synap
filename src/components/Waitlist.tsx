import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Waitlist() {
  return (
    <section className="py-32 px-6 bg-art-bg text-art-ink overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-8 font-semibold">Join / Waitlist</p>
          <h2 className="text-4xl lg:text-8xl font-normal mb-12 leading-[1.1]">
            Be first. Shape their <br className="hidden sm:block" />
            <span className="serif-italic text-art-accent">future earlier</span>.
          </h2>
          <p className="text-xl text-art-muted mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Join the waitlist for Synapse. We're launching early access to 500 families who want to move from guesswork to neuroscience.
          </p>

          <div className="flex flex-col items-center gap-12">
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-0 border border-art-border p-1">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-transparent text-art-ink placeholder:text-art-muted focus:outline-none transition-all"
              />
              <Button variant="primary" className="whitespace-nowrap rounded-none">
                Join Waitlist
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] uppercase tracking-[0.2em] text-art-muted font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-art-accent" />
                <span>Early Access Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-art-accent" />
                <span>Beta Feature Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-art-accent" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
