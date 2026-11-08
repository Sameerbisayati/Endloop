export default function PageHeader({ label, title, text }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white min-h-[65vh] flex items-center px-6">
      <div className="blob bg-g w-[460px] h-[460px] -left-32 -top-24 animate-pulse" />
      <div className="blob bg-b w-[420px] h-[420px] right-0 top-20 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="blob bg-p w-[380px] h-[380px] left-1/2 -bottom-52 animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="relative max-w-7xl mx-auto w-full py-24">
        <p className="text-emerald-300 font-extrabold uppercase tracking-widest text-sm">{label}</p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.03] my-5 max-w-5xl">{title}</h1>
        {text && <p className="text-xl md:text-2xl text-white/70 max-w-3xl">{text}</p>}
      </div>
    </section>
  )
}