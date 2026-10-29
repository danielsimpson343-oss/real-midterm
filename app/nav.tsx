import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1.25rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <Link href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}>
        HYL
      </Link>
      <Link href="/products" style={{ textDecoration: "none", color: "#000" }}>
        Shop
      </Link>
      <Link href="/about" style={{ textDecoration: "none", color: "#000" }}>
        About
      </Link>
    </nav>
  );
}