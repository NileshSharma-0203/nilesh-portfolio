export function SectionDivider() {
    return (
      <div className="relative h-px w-full overflow-hidden bg-white/10">
        <div className="absolute inset-y-0 left-0 w-1/3 animate-[scan_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-green-400/70 to-transparent" />
      </div>
    );
  }