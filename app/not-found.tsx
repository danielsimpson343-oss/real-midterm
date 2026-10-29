import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Page Not Found
      </h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        Sorry, we could not find the page you are looking for.
      </p>
      <Link
        href="/"
        style={{
          background: "#000",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
