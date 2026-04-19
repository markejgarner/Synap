import { motion } from "motion/react";
import { ListChecks, Eye, BrainCircuit, LineChart } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Step 01 — You set the tasks",
    description: "Homework, reading, chores — whatever works for your family. The phone locks until they're done. You stay in control.",
    color: "border-art-accent"
  },
  {
    icon: Eye,
    title: "Step 02 — They see the reason",
    description: "Alongside their tasks, your child gets occasional short content — not lessons, not lectures — just brief, interesting context about what their brain is doing when they do hard things.",
    color: "border-art-muted"
  },
  {
    icon: BrainCircuit,
    title: "Step 03 — You understand the science",
    description: "You get a short, clear explanation of the neuroscience behind what they're experiencing at this developmental stage. Not a course. Just enough to feel confident about what you're doing.",
    color: "border-art-border"
  },
  {
    icon: LineChart,
    title: "Step 04 — The habit builds",
    description: "Over weeks, the mechanic becomes routine. The resentment reduces. The understanding grows. The phone becomes something earned, not something fought over.",
    color: "border-art-border"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 px-6 bg-art-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-4 font-semibold">The Mechanism</p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-normal text-art-ink mb-4 italic tracking-tight underline decoration-art-accent/20 underline-offset-8">Same mechanic. Different relationship.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-art-border">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 md:p-12 border-art-border ${index < steps.length - 1 ? 'lg:border-r' : ''} ${index % 2 === 0 ? 'md:border-r lg:border-r' : ''} border-b lg:border-b-0 hover:bg-art-ink/5 transition-colors group`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl serif-italic text-art-accent opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                <step.icon className="w-6 h-6 text-art-muted group-hover:text-art-accent transition-colors" />
              </div>
              <h3 className="text-xl font-serif italic mb-6 text-art-ink">{step.title}</h3>
              <p className="text-art-muted leading-relaxed font-light text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
