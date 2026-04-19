export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-art-bg border-t border-art-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.1em] text-art-muted leading-relaxed mb-4">
          Little Cortex uses Apple FamilyControls — the same framework Apple built for Screen Time. Your child's phone locks at the OS level, not the app level. It can't be bypassed by deleting an app.
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-art-muted/50 font-semibold italic">
          Built for iOS. Designed for families with children aged 8–14.
        </p>
        
        <div className="mt-12 pt-8 border-t border-art-border flex justify-center gap-12 text-[10px] uppercase tracking-[0.2em] font-semibold text-art-muted/40">
          <p>© 2026 Little Cortex</p>
        </div>
      </div>
    </footer>
  );
}
