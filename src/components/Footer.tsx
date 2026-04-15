export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-art-bg border-t border-art-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="brand-vertical text-xl font-serif italic uppercase tracking-[0.2em] border-r border-art-border pr-4 h-10 flex items-center">
                Synapse
              </div>
            </div>
            <p className="text-art-muted max-w-sm leading-relaxed font-light">
              The first parenting app built on neuroscience — where parents and children learn the science of the brain together.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-art-muted mb-8">Product</h4>
            <ul className="space-y-4 text-sm serif-italic text-art-ink">
              <li><a href="#" className="hover:text-art-accent transition-colors">The Science</a></li>
              <li><a href="#" className="hover:text-art-accent transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-art-accent transition-colors">Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-art-muted mb-8">Company</h4>
            <ul className="space-y-4 text-sm serif-italic text-art-ink">
              <li><a href="#" className="hover:text-art-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-art-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-art-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-art-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-art-muted">© 2026 Synapse / Curator</p>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-semibold text-art-muted">
            <a href="#" className="hover:text-art-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-art-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-art-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
