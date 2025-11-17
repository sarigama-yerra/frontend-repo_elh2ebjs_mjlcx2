function AppGlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-sky-200 opacity-60" />
    </div>
  )
}

export default AppGlowBackground
