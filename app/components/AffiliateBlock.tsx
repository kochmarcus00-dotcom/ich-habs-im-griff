import {
  products as allProducts,
  type ProductKey,
} from "@/app/data/products";
import {
  BookOpen,
  Lightbulb,
  NotebookPen,
  Droplets,
  Moon,
  CalendarCheck,
  Coffee,
  Puzzle,
  Paintbrush,
  Leaf
} from "lucide-react";

const iconMap = {
  journal: NotebookPen,
  tracker: CalendarCheck,
  drink: Droplets,
  tea: Coffee,
  sleep: Moon,
  activity: Puzzle,
  creative: Paintbrush,
  relax: Leaf,
} as const;

interface AffiliateBlockProps {
  products: readonly ProductKey[];
}

export default function AffiliateBlock({
  products,
}: AffiliateBlockProps) {
  return (
    <section
      style={{
        marginTop: "80px",
        padding: "40px",
        borderRadius: "18px",
        backgroundColor: "#111111",
        border: "1px solid #2a2a2a",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "18px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "15px",
          }}
        >
          <Lightbulb
            size={28}
            color="#D68A1F"
            strokeWidth={2}
          />

          <h2
            style={{
              fontSize: "34px",
              margin: 0,
              color: "white",
            }}
          >
            Das könnte dir zusätzlich helfen
          </h2>
        </div>

      </div>

      <p
        style={{
          color: "#8d8d8d",
          fontSize: "14px",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        Hinweis: Die folgenden Empfehlungen enthalten Affiliate-Links.
        Wenn du über einen dieser Links einkaufst, erhalten wir eine kleine
        Provision. Für dich entstehen dadurch keine zusätzlichen Kosten.
      </p>

      {products.map((id, index) => {
        const product = allProducts[id];
        const Icon = iconMap[product.type as keyof typeof iconMap];
        return (
          <div
            key={product.id}
            style={{
              paddingBottom: "35px",
              marginBottom: "35px",
              borderBottom:
                index !== products.length - 1
                  ? "1px solid #2a2a2a"
                  : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              {Icon && (
                <Icon
                  size={21}
                  color="#D68A1F"
                  strokeWidth={2}
                />
              )}

              <h3
                style={{
                  margin: 0,
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {product.title}
              </h3>
            </div>

            <p
              style={{
                color: "#cfcfcf",
                lineHeight: "1.9",
                fontSize: "18px",
                marginBottom: "22px",
              }}
            >
              {product.description}
            </p>

            <a
              href={product.url}
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "#D68A1F",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "1px solid #D68A1F",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
                transition: "all .2s ease",
              }}
            >
              👉 Empfehlung bei Amazon ansehen
            </a>
          </div>
        );
      })}
    </section>
  );
}