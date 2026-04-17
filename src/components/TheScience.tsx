import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function TheScience() {
  return (
    <section className="py-32 px-6 bg-art-bg relative overflow-hidden border-b border-art-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-6 font-semibold">The Science / Evidence</p>
          <h2 className="text-4xl lg:text-7xl font-normal text-art-ink mb-12 leading-[1.1]">
            Built on prefrontal cortex development and <span className="serif-italic">attachment science</span>.
          </h2>
          <div className="space-y-8 text-lg text-art-muted leading-relaxed font-light">
            <p>
              Your child's brain is a work in progress. The prefrontal cortex — responsible for emotional regulation and impulse control — doesn't fully mature until the mid-twenties.
            </p>
            <p>
              LittleCortex uses this reality as a roadmap. We don't just give you "tips"; we give you a biological understanding of why your child is behaving a certain way, and how your response can literally shape their neural pathways.
            </p>
          </div>
          
          <div className="mt-16 p-12 bg-art-ink/5 border border-art-border relative">
            <div className="absolute top-0 right-0 w-12 h-[1px] bg-art-accent" />
            <Quote className="w-10 h-10 text-art-accent/20 mb-6" />
            <p className="text-2xl serif-italic text-art-ink mb-8 leading-relaxed">
              "Dopamine regulation in children ages 8–12 responds to structured daily reward cycles. LittleCortex translates this complex neurobiology into a simple family ritual."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-art-border" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-art-muted mb-1">Source</div>
                <div className="text-sm serif-italic text-art-accent">Clinical Review Board</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-art-bg border border-art-border rounded-t-[200px] p-12 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-art-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <div className="flex items-end gap-4 mb-12">
                <div className="w-full h-32 bg-art-border rounded-t-lg" />
                <div className="w-full h-48 bg-art-border rounded-t-lg" />
                <div className="w-full h-64 bg-art-accent rounded-t-lg" />
                <div className="w-full h-40 bg-art-border rounded-t-lg" />
              </div>
              <div className="pt-8 border-t border-art-border">
                <p className="text-[10px] uppercase tracking-widest text-art-muted mb-4">Specification</p>
                <h4 className="text-2xl font-serif italic text-art-ink mb-4">Neural Plasticity at Work</h4>
                <p className="text-art-muted font-light leading-relaxed">
                  Consistent daily micro-interactions are 4x more effective at building long-term emotional resilience than occasional deep-dives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
