export function BootOverlay() {
  return (
    <div
      className="boot-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-foreground"
      aria-hidden="true"
    >
      <div className="boot-line h-0.5 w-full bg-card" />
    </div>
  )
}
