import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "3rem 2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        Hallelu Yahuah le&apos;olam
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        HYL LLC &mdash; Skin &amp; Hair Care, Made Simple
      </p>

      <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto", lineHeight: 1.6 }}>
        Welcome to HYL. We bring you trusted skin and hair care essentials,
        sourced with care and delivered with purpose.
      </p>

      <Link
        href="/products"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Shop All Products
      </Link>
    </main>
  );
}
