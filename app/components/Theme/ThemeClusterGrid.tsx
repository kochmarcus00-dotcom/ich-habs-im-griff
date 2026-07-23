const clusters = [
  "Einschlafen",
  "Durchschlafen",
  "Träume",
  "REM-Schlaf",
  "Tiefschlaf",
  "Müdigkeit",
];

export default function ThemeClusterGrid() {
  return (
    <section className="theme-clusters">

      <div className="theme-container">

        <p className="section-kicker">
          WISSENSBEREICHE
        </p>

        <h2>
          Entdecke das Thema Schlaf
        </h2>

        <div className="cluster-grid">

          {clusters.map((cluster) => (
            <button
              key={cluster}
              className="cluster-pill"
            >
              {cluster}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}