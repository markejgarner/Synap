import { motion } from "motion/react";

const comparisonData = [
  {
    other: "Phone locked — no reason given",
    littleCortex: "Phone locked — reason explained"
  },
  {
    other: "Child waits resentfully",
    littleCortex: "Child has context"
  },
  {
    other: "Parent feels like the enforcer",
    littleCortex: "Parent feels informed"
  },
  {
    other: "Behaviour managed",
    littleCortex: "Understanding built"
  }
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-art-bg border-y border-art-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-8 font-semibold text-center">The Difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-normal text-art-ink mb-12 md:mb-20 text-center leading-[1.1] tracking-tight">
            Other apps lock the phone. <br className="hidden sm:block" />
            <span className="serif-italic text-art-accent">Little Cortex explains why it's locked.</span>
          </h2>

          <div className="grid grid-cols-2 gap-0 border border-art-border">
            {/* Header */}
            <div className="p-4 md:p-8 border-r border-b border-art-border bg-art-ink/5">
              <p className="text-[10px] uppercase tracking-widest text-art-muted font-bold text-center">Other Apps</p>
            </div>
            <div className="p-4 md:p-8 border-b border-art-border bg-art-accent/10">
              <p className="text-[10px] uppercase tracking-widest text-art-accent font-bold text-center">Little Cortex</p>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                <div className={`p-4 md:p-8 border-r ${index < comparisonData.length - 1 ? 'border-b' : ''} border-art-border flex items-center justify-center text-center`}>
                  <p className="text-xs md:text-sm text-art-muted font-light">{row.other}</p>
                </div>
                <div className={`p-4 md:p-8 ${index < comparisonData.length - 1 ? 'border-b' : ''} border-art-border flex items-center justify-center text-center bg-art-accent/5`}>
                  <p className="text-xs md:text-sm text-art-ink font-serif italic">{row.littleCortex}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
