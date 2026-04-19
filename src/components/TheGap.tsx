import { motion } from "motion/react";

export default function TheGap() {
  return (
    <section className="py-20 md:py-32 bg-art-bg text-art-ink px-6 border-y border-art-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-8 font-semibold">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal mb-12 leading-[1.1] tracking-tight">
            Screen time limits create arguments. <br className="hidden sm:block" />
            <span className="serif-italic text-art-accent">Little Cortex gives the argument a reason.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg text-art-muted leading-relaxed font-light">
            <p>
              Every parent has been the villain. The one enforcing the rule, absorbing the resentment, wondering if it's even worth it. Little Cortex doesn't remove the boundary — it gives your child a reason they can actually understand.
            </p>
            <p>
              When they know their brain is still developing and that doing this genuinely helps, the dynamic shifts. <span className="text-art-ink serif-italic">Not immediately. Over time.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
