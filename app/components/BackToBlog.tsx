export default function BackToBlog() {
  return (
    <div
      style={{
        marginTop: "60px",
        paddingTop: "30px",
        borderTop: "1px solid #222",
        textAlign: "center",
      }}
    >
      <a
        href="/blog"
        style={{
          display: "inline-block",
          color: "#D68A1F",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "18px",
          transition: "opacity .2s ease",
        }}
      >
        ← Zurück zum Blog
      </a>
    </div>
  );
}