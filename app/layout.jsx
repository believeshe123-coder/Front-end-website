import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Field Office",
  description:
    "Remote office support for service businesses that need help with calls, scheduling, estimates, invoices, follow-up, and growth.",
  icons: {
    icon: "/images/49c629de-fa9f-42b4-b9ad-d1ffaaddd7d8.png",
    shortcut: "/images/49c629de-fa9f-42b4-b9ad-d1ffaaddd7d8.png",
    apple: "/images/49c629de-fa9f-42b4-b9ad-d1ffaaddd7d8.png",
  },
};

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex min-h-16 w-full max-w-7xl flex-row items-center justify-between gap-3 overflow-visible px-4 py-0 lg:min-h-20 lg:px-8">
            <Link href="/" className="flex items-center gap-3 transition hover:opacity-85" aria-label="Field Office home">
              <img src="/images/49c629de-fa9f-42b4-b9ad-d1ffaaddd7d8.png" alt="" className="m-0 block h-12 w-12 rounded-sm object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
              <span className="rounded-md border border-blue-950/15 bg-white px-3 py-2 text-xl font-black leading-none tracking-tight text-blue-950 shadow-sm sm:text-2xl lg:text-3xl">Field Office</span>
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-black text-blue-950 transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
              <Link href="/quote" className="btn-primary px-5 py-2.5">Get A Quote Here</Link>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <details className="mobile-menu relative">
                <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-xl font-black text-blue-950" aria-label="Open navigation menu">☰</summary>
                <div className="absolute right-0 top-12 z-50 grid min-w-44 gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-950/15">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-black text-blue-950 hover:bg-blue-50">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link href="/quote" className="btn-primary px-4 py-2">Get A Quote Here</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-73px)]">{children}</main>
        <footer className="site-footer px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-white sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Field Office.</p>
            <p>Practical support for businesses that keep things running.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
