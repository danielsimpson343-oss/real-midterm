import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main style={{ padding: "2rem" }}>
      <Link href="/products">&larr; Back to all products</Link>
      <h1>{product.title}</h1>
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{ maxWidth: "400px", width: "100%", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}