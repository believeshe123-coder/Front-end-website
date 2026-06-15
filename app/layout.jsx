import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Blue Collar Office Help",
  description:
    "Scheduling, customer calls, invoicing, and follow-up for growing service businesses.",
};

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
  { href: "/#resources", label: "Resources" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <Link href="/" className="flex items-center gap-3 text-blue-950 transition hover:text-blue-700">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-2xl text-white shadow-lg shadow-blue-700/20">▱</span>
              <span className="leading-none">
                <span className="block text-2xl font-black uppercase tracking-[0.08em]">Blue Collar</span>
                <span className="block text-sm font-black uppercase tracking-[0.35em] text-slate-600">Office Help</span>
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-4 sm:gap-7">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-black text-blue-950 transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="rounded-lg bg-blue-700 px-7 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
                Let&apos;s Talk
              </Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-73px)]">{children}</main>
        <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Blue Collar Office Help.</p>
            <p>Practical admin support for contractors and service businesses.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
