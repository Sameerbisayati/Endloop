const words = ['Read', 'Match', 'Check', 'Draft', 'Review']

export default function Marquee() {
  const list = [...words, ...words, ...words, ...words, ...words, ...words] 

  return (
    <div className="bg-white py-5 overflow-hidden whitespace-nowrap border-b border-line" aria-hidden="true">
      <div className="inline-block text-4xl md:text-6xl font-extrabold" style={{ animation: 'marquee 30s linear infinite' }}>
        {[...list, ...list].map((word, i) => (
          <span key={i}>
            {word}<span className="mx-6 text-g">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}