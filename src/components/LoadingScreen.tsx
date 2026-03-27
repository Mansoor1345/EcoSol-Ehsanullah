interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div
      className="loading-screen"
      onAnimationEnd={onComplete}
    >
      {/* Background energy grid */}
      <div className="loading-grid" />

      {/* Orbiting solar ring */}
      <div className="loading-orbit-ring" />

      {/* Central sun burst */}
      <div className="loading-sun-wrap">
        <div className="loading-sun">
          {/* Rays */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="loading-ray"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
          {/* Core */}
          <div className="loading-core">
            <span className="loading-letter">R</span>
          </div>
        </div>
      </div>

      {/* Brand text */}
      <div className="loading-brand">
        <p className="loading-brand-name">ECO-SOL ENERGIES</p>
        <p className="loading-brand-tagline">WE BRIGHTEN UP YOUR HOMES</p>
      </div>

      {/* Energy bar */}
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
        <div className="loading-bar-glow" />
      </div>

      {/* Percentage */}
      <p className="loading-percent">Charging...</p>
    </div>
  );
}
