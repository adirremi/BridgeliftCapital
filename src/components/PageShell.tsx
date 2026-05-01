import { type ReactNode, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';

const APPLY = '/apply-now/';
const ISO = '/become-an-iso-partner/';
const TERMS = 'https://bridgeliftcapital.com/terms-condition/';
const PRIVACY = 'https://bridgeliftcapital.com/privacy-policy/';

const nav = [
  { href: '/#funding', label: 'Funding' },
  { href: '/#industries', label: 'Industries' },
  { href: '/#process', label: 'Process' },
  { href: '/#examples', label: 'Recent fundings' },
  { href: '/#faq', label: 'FAQ' },
] as const;

type Props = {
  children: ReactNode;
  active?: 'apply' | 'iso';
};

export default function PageShell({ children, active }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a className="flex min-w-0 items-center gap-2" href="/">
            <img
              src="/Bridge-Lift-Capital.webp"
              alt="BridgeLift Capital"
              className="h-10 w-auto sm:h-11"
              width={180}
              height={71}
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={ISO}
              aria-current={active === 'iso' ? 'page' : undefined}
              className={`hidden md:inline-flex items-center justify-center rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${
                active === 'iso'
                  ? 'border-brand-200 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              ISO Partnership
            </a>
            <a
              href={APPLY}
              aria-current={active === 'apply' ? 'page' : undefined}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-gradient-to-tr from-mint-500 to-brand-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-mint-400 hover:to-brand-400"
            >
              Apply now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="inline-flex rounded-md p-2 text-slate-600 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md py-2.5 text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={ISO}
                className="block rounded-md py-2.5 font-semibold text-slate-900"
                onClick={() => setOpen(false)}
              >
                ISO Partnership
              </a>
              <a
                href={APPLY}
                className="block rounded-md py-2.5 font-semibold text-brand-700"
                onClick={() => setOpen(false)}
              >
                Apply now
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main">{children}</main>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-eyebrow font-semibold uppercase text-slate-500">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>
                  <a
                    className="inline-flex items-center gap-2 font-medium text-slate-900 hover:text-brand-700"
                    href="tel:6466991125"
                  >
                    <Phone className="h-4 w-4 text-slate-500" />
                    646-699-1125
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-slate-900 hover:text-brand-700"
                    href="mailto:deals@bridgeliftcapital.com"
                  >
                    deals@bridgeliftcapital.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-eyebrow font-semibold uppercase text-slate-500">
                For businesses
              </p>
              <p className="mt-3 text-slate-700">
                115 W 30th St #1110B
                <br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <p className="text-eyebrow font-semibold uppercase text-slate-500">
                Ready to start?
              </p>
              <a
                href={APPLY}
                className="mt-3 inline-flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/Bridge-Lift-Capital.webp"
              alt=""
              className="h-8 w-auto opacity-90"
              aria-hidden
            />
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} BridgeLift Capital. All rights
              reserved.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
            <li>
              <a className="hover:text-slate-800" href={TERMS}>
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-slate-800" href={PRIVACY}>
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
