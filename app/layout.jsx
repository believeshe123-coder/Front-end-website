import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Blue Collar Office Help",
  description:
    "Scheduling, customer calls, invoicing, and follow-up for growing service businesses.",
};

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-blue-950 transition hover:text-blue-700"
            >
              Blue Collar Office Help
            </Link>
            <div className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
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
