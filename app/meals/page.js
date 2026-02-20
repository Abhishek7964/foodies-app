import Link from "next/link";

export default function meals() {
  return (
    <>
      <div style={{ color: "white" }}>Meals</div>
      <Link href="/meals/1">Post 1</Link>
      <Link href="/meals/2">Post 2</Link>
    </>
  );
}
