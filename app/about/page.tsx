import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About HYL</h1>
      <p
        className={lora.className}
        style={{ color: "#444", lineHeight: 1.6, fontSize: "1.05rem" }}
      >
        HYL LLC was founded on a simple belief: skin and hair care should be
        trustworthy, simple, and made with purpose. We carefully source every
        product we sell, so you can focus on what matters — feeling confident
        in your own skin.
      </p>
    </main>
  );
}
