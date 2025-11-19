const Hero = ({ stats = {}, story = {} }) => {
  return (
    <section className="relative overflow-hidden h-150 md:h-[100vh]">
      {/* Background image (dynamic) */}

      {stats.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stats.backgroundImage})` }}
          aria-hidden
        />
      )}

      {/* subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.15))]" />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: stats.backgroundImage ? `rgba(0,0,0,${stats.overlayOpacity ?? 0.45})` : 'transparent' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-3">{stats.title}</h2>
        <p className="text-lg text-white/90 mb-6">{stats.subtitle}</p>
        {story?.quote && (
          <div className="max-w-2xl w-full">
            <div className="mx-auto bg-black/55 text-white rounded-3xl px-6 py-6 shadow-lg border border-white/10">
              {story?.title && (
                <div className="text-center mb-3">
                  <span className="inline-block text-emerald-400 font-semibold text-xs uppercase tracking-wide">{story.title}</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{story.quote}</p>
              {story?.author && <div className="text-xs text-white/80 mt-4 text-right">{story.author}</div>}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
