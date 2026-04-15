import { motion } from "motion/react";
import { BookOpen, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "3 Minutes for You",
    description: "Receive a daily micro-lesson on the neuroscience of your child's current developmental stage. No fluff, just evidence.",
    color: "border-art-accent"
  },
  {
    icon: Zap,
    title: "5 Minutes for Them",
    description: "Your child completes a parallel, age-appropriate activity that teaches them how their own brain works.",
    color: "border-art-muted"
  },
  {
    icon: RefreshCw,
    title: "Behaviour Changes",
    description: "Device accountability ensures the practice happens. Shared language ensures the change sticks.",
    color: "border-art-border"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-art-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-art-accent mb-4 font-semibold">The Mechanism</p>
          <h2 className="text-4xl lg:text-6xl font-normal text-art-ink mb-4">How It Works</h2>
          <p className="text-xl text-art-muted max-w-2xl font-light italic">
            One science. Two experiences. One shared family language.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-art-border">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-12 border-art-border ${index < steps.length - 1 ? 'md:border-r' : ''} border-b md:border-b-0 hover:bg-art-ink/5 transition-colors group`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl serif-italic text-art-accent opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                <step.icon className="w-6 h-6 text-art-muted group-hover:text-art-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif italic mb-6 text-art-ink">{step.title}</h3>
              <p className="text-art-muted leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
