import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products/category/beauty");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Shop All Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}>
              <img src={product.thumbnail} alt={product.title} style={{ width: "100%", borderRadius: "4px" }} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
