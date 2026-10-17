
export function Footer() {
  return (
    <footer className="border-t border-white/[0.09] bg-[#09090b] py-[25px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 font-mono text-[9px] text-[#696f7b] lg:px-8 max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-3">
        <span>© 2026 Samuel Nelson</span>

        <span className="flex items-center gap-[7px]">
          <span className="size-[6px] shrink-0 rounded-full bg-[#34d399] shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          <span>Designing Software For You</span>
        </span>
      </div>
    </footer>
  );
}
