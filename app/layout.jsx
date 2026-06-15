import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Website Name",
  description: "A simple front page website built with Next.js and Tailwind CSS.",
};

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-slate-950 transition hover:text-blue-700"
            >
              Website Name
            </Link>
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-73px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
