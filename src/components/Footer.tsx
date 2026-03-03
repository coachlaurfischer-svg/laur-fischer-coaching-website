export default function Footer() {
  return (
    <footer className="bg-[#3d2b1f] text-[#c4a882]">
      {/* Rainbow stripe */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-display)] text-[#f5efe6] text-lg font-semibold">
            Laur Fischer
          </p>
          <p className="text-[#a3b18a] tracking-widest uppercase text-xs mt-0.5">
            Trail Running Coach · Seattle, WA
          </p>
        </div>

        <p className="text-[#8c8076] text-xs text-center">
          Committed to building an inclusive trail running community.
          <br />
          Sliding scale pricing available.
        </p>

      
      </div>
    </footer>
  );
}
 