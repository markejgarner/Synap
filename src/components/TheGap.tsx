import { motion } from "motion/react";

export default function TheGap() {
  return (
    <section className="py-32 bg-art-bg text-art-ink px-6 border-y border-art-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-8 font-semibold">The Problem / The Gap</p>
          <h2 className="text-4xl lg:text-7xl font-normal mb-12 leading-[1.1]">
            Good Inside teaches you. <br className="hidden sm:block" />
            <span className="serif-italic text-art-accent">LittleCortex changes your child too.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-art-muted leading-relaxed font-light">
            <p>
              You've read the books. You've listened to the podcasts. You know the theory of gentle parenting and brain development. But when the moment of escalation happens, the theory often stays in the book.
            </p>
            <p>
              LittleCortex fills the gap between <span className="text-art-ink serif-italic">knowing</span> and <span className="text-art-ink serif-italic">doing</span>. By involving your child in the same scientific language and using a device accountability layer, we turn parenting advice into a shared family practice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
