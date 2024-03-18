import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-[#ffba08]">Next.js 14 PWA App</h1>
      <Link href="/docs" className="md:text-2xl sm:text-xl font-medium">Docs Page</Link>
    </main>
  );
}
