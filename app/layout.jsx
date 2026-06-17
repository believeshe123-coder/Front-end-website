import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Field Office",
  description:
    "Remote office support for service businesses that need help with calls, scheduling, estimates, invoices, follow-up, and growth.",
};

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/who-we-service", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex min-h-20 w-full max-w-7xl flex-row items-center justify-between gap-4 overflow-visible px-4 py-0 lg:px-8">
            <Link href="/" className="flex items-center transition hover:opacity-85" aria-label="Field Office home">
              <img src="/images/Logo%20(2).png" alt="Field Office" className="m-0 block h-20 w-auto max-w-[14rem] rounded-sm object-contain sm:h-24 sm:max-w-[20rem]" />
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-black text-blue-950 transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary px-5 py-2.5">Get Quote</Link>
            </div>
            <div className="flex items-center gap-3 md:hidden">
              <Link href="/services" className="text-sm font-black text-blue-950">Services</Link>
              <Link href="/contact" className="btn-primary px-4 py-2">Get Quote</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-73px)] pb-16 md:pb-0">{children}</main>
        <Link href="/contact" className="mobile-quote-button">Get A Quote</Link>
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
