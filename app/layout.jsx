import Link from "next/link";
import { AdminControls } from "@/components/AdminControls";
import "./globals.css";

export const metadata = {
  title: "Field Office",
  description:
    "Call management, scheduling, financial support, marketing, recruiting, and business support for service businesses.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-service", label: "Who we service" },
  { href: "/about", label: "About us" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <Link href="/" className="flex items-center gap-3 text-blue-950 transition hover:text-blue-700">
              <span className="brand-mark flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black shadow-lg">▱</span>
              <span className="block text-2xl font-black uppercase tracking-[0.08em]">Field Office</span>
            </Link>
            <div className="flex flex-wrap items-center gap-4 sm:gap-7">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-black text-blue-950 transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
              <div className="group relative">
                <Link href="/contact" className="text-sm font-black text-blue-950 transition hover:text-blue-700">
                  Contact us
                </Link>
                <div className="absolute right-0 top-full hidden min-w-44 pt-3 group-hover:block group-focus-within:block">
                  <Link href="/contact" className="block rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-black text-blue-950 shadow-xl shadow-blue-950/10 transition hover:bg-blue-50 hover:text-blue-700">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-73px)]">{children}</main>
        <AdminControls />
        <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Field Office.</p>
            <p>Practical support for businesses that keep things running.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
