import { type FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Coffee,
  HeartPulse,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const APPLY = 'https://bridgeliftcapital.com/apply-now/';
const TERMS = 'https://bridgeliftcapital.com/terms-condition/';
const PRIVACY = 'https://bridgeliftcapital.com/privacy-policy/';

const nav = [
  { href: '#funding', label: 'Funding' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Process' },
  { href: '#examples', label: 'Examples' },
  { href: '#faq', label: 'FAQ' },
] as const;

type FundingExample = {
  icon: LucideIcon;
  business: string;
  amount: string;
  use: string;
  tone: string;
};

const examples: FundingExample[] = [
  {
    icon: Scissors,
    business: 'Salon',
    amount: '$25,000',
    use: 'Payroll, inventory, and weekend demand',
    tone: 'from-emerald-100 to-sky-100 text-emerald-700',
  },
  {
    icon: HeartPulse,
    business: 'Pet grooming',
    amount: '$75,000',
    use: 'New location build-out and working capital',
    tone: 'from-sky-100 to-cyan-100 text-sky-700',
  },
  {
    icon: Coffee,
    business: 'Coffee shop',
    amount: '$15,000',
    use: 'Cash-flow cushion for seasonal purchasing',
    tone: 'from-lime-100 to-emerald-100 text-lime-700',
  },
  {
    icon: Wrench,
    business: 'Auto repair',
    amount: '$120,000',
    use: 'Parts, vendor balances, and shop upgrades',
    tone: 'from-cyan-100 to-blue-100 text-cyan-700',
  },
  {
    icon: Utensils,
    business: 'Restaurant',
    amount: '$150,000',
    use: 'Inventory, staffing, and kitchen repairs',
    tone: 'from-emerald-100 to-teal-100 text-emerald-700',
  },
  {
    icon: Building2,
    business: 'Construction',
    amount: '$60,000',
    use: 'Materials and payroll between draws',
    tone: 'from-blue-100 to-emerald-100 text-blue-700',
  },
];

const heroExamples = examples.slice(0, 3);

const industries = [
  { icon: Wrench, name: 'Auto body & repair' },
  { icon: Utensils, name: 'Restaurants & food' },
  { icon: HeartPulse, name: 'Healthcare & medical' },
  { icon: Truck, name: 'Transportation' },
  { icon: Building2, name: 'Construction' },
  { icon: Store, name: 'Retail & storefronts' },
] as const;

const stats = [
  { v: '$2M', l: 'Funding up to' },
  { v: '$50M+', l: 'Funded nationwide' },
  { v: '1hr', l: 'Decision speed' },
  { v: 'Same day', l: 'Funding available' },
];

const faqs = [
  {
    q: 'What kind of funding does BridgeLift Capital provide?',
    a: 'BridgeLift Capital provides merchant cash advances (revenue-based financing), where we purchase a portion of a business’s future receivables. Payments are made as a percentage of revenue and may vary based on performance. This is not a loan.',
  },
  {
    q: 'Is this a loan?',
    a: 'No. A merchant cash advance is not a loan. It is a purchase of future receivables, and payments may vary based on revenue.',
  },
  {
    q: 'Will applying affect my credit score?',
    a: 'No. Pre-qualification uses a soft credit pull only, so your credit score is not affected.',
  },
  {
    q: 'How fast can I get a decision?',
    a: 'Most complete submissions receive a decision in about 1 hour during business hours, with same-day funding available after final approval.',
  },
  {
    q: 'What can I use the funds for?',
    a: 'Inventory, payroll, repairs, marketing, taxes, vendor payments, expansion, or general working capital needs.',
  },
  {
    q: 'What are the minimum requirements?',
    a: 'At least 10 months in business, $25,000+ in monthly revenue, 500+ FICO, and no open bankruptcies.',
  },
];

function buildMailto(subject: string, data: Record<string, string>) {
  const body = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  return `mailto:deals@bridgeliftcapital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function BusinessIcon({
  icon: Icon,
  tone,
  size = 'md',
}: {
  icon: LucideIcon;
  tone: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim =
    size === 'lg' ? 'h-16 w-16' : size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';

  return (
    <span
      className={`inline-flex ${dim} shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} ring-4 ring-white shadow-soft`}
    >
      <Icon className={size === 'lg' ? 'h-7 w-7' : 'h-5 w-5'} strokeWidth={1.8} />
    </span>
  );
}

function ApprovalCard({
  item,
  className = '',
}: {
  item: FundingExample;
  className?: string;
}) {
  return (
    <div
      className={`flex w-72 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-soft backdrop-blur ${className}`}
    >
      <BusinessIcon icon={item.icon} tone={item.tone} size="lg" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-slate-900">
            {item.business}
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-50 px-2 py-0.5 text-[11px] font-medium text-mint-600 ring-1 ring-mint-100">
            <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
            Approved
          </span>
        </div>
        <p className="mt-0.5 truncate text-xs text-slate-500">
          Revenue-based financing
        </p>
        <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
          {item.amount}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState<'iso' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const onIsoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => {
      if (typeof v === 'string') data[k] = v;
    });
    window.location.href = buildMailto(
      'ISO partnership inquiry from bridgeliftcapital.com (preview)',
      data,
    );
    setSubmitted('iso');
  };

  return (
    <div className="bg-white text-slate-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="relative isolate overflow-hidden border-b border-mint-100 bg-mint-50/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6">
          <p className="flex items-center gap-2 font-medium text-mint-700">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
            Direct cash advance lender · Soft credit pull only
          </p>
          <div className="hidden items-center gap-3 text-mint-700 sm:flex">
            <span className="inline-flex items-center gap-1 font-medium">
              <Clock3 className="h-3.5 w-3.5" /> 1 hour decision
            </span>
            <span aria-hidden>·</span>
            <span>Same day funding available</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a className="flex min-w-0 items-center gap-2" href="#">
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
              href="mailto:deals@bridgeliftcapital.com?subject=ISO%20Partnership"
              className="hidden md:inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              ISO Partnership
            </a>
            <a
              href={APPLY}
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
                href="mailto:deals@bridgeliftcapital.com?subject=ISO%20Partnership"
                className="block rounded-md py-2.5 font-semibold text-slate-900"
                onClick={() => setOpen(false)}
              >
                ISO Partnership
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-mesh-light" aria-hidden />
          <div
            className="absolute inset-0 -z-10 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent_75%)]"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
            <div className="lg:col-span-7">
              <h1 className="text-balance font-semibold tracking-tight text-slate-900 text-display">
                Fast capital
                <br />
                built around your
                <span className="bg-gradient-to-r from-brand-600 via-mint-500 to-brand-500 bg-clip-text text-transparent">
                  {' '}
                  revenue
                </span>
                .
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-lg text-slate-600">
                BridgeLift Capital provides cash advances and revenue-based
                financing up to{' '}
                <span className="font-semibold text-slate-900">$2 million</span>
                . Apply in minutes, get a 1 hour decision, and access same day
                funding after approval.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={APPLY}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-slate-800"
                >
                  Get funded today
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel:6466991125"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3.5 text-base font-medium text-slate-800 backdrop-blur transition hover:border-slate-300 hover:bg-white"
                >
                  <Phone className="h-4 w-4 text-slate-500" />
                  646-699-1125
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                {[
                  ['No impact on credit', ShieldCheck],
                  ['Same day funding', Zap],
                  ['Fast approvals', Clock3],
                ].map(([label, Icon]) => {
                  const I = Icon as typeof ShieldCheck;
                  return (
                    <li key={label as string} className="inline-flex items-center gap-2">
                      <I className="h-4 w-4 text-mint-600" strokeWidth={2.25} />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative lg:col-span-5">
              <div
                className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-brand-100/60 via-white to-mint-100/60 blur-2xl"
                aria-hidden
              />
              <div className="relative mx-auto h-[420px] w-full max-w-md">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-brand-100 to-mint-100 ring-1 ring-white/60">
                    <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/80" />
                    <div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Direct funding
                      </p>
                      <p className="mt-2 text-4xl font-bold text-slate-900">
                        $50M+
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        funded through revenue-based capital
                      </p>
                    </div>
                  </div>
                </div>

                <ApprovalCard
                  item={heroExamples[0]}
                  className="absolute left-0 top-2 -rotate-3 animate-floaty"
                />
                <ApprovalCard
                  item={heroExamples[1]}
                  className="absolute right-0 top-32 rotate-2 animate-floaty [animation-delay:1.2s]"
                />
                <ApprovalCard
                  item={heroExamples[2]}
                  className="absolute bottom-0 left-6 -rotate-2 animate-floaty [animation-delay:2.4s]"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white/60 backdrop-blur">
            <div className="mask-fade-x mx-auto max-w-6xl overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-12 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                {[
                  'Over $50M funded',
                  'Same-day funding',
                  '1 hour decisions',
                  'Soft credit only',
                  'Fast approvals',
                  'Revenue-based financing',
                  'Direct lender',
                  'Over $50M funded',
                  'Same-day funding',
                  '1 hour decisions',
                  'Soft credit only',
                  'Fast approvals',
                  'Revenue-based financing',
                  'Direct lender',
                ].map((t, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/60 p-5 text-center shadow-soft"
                >
                  <dt className="text-eyebrow font-semibold uppercase text-slate-500">
                    {s.l}
                  </dt>
                  <dd className="mt-2 bg-gradient-to-br from-brand-600 to-mint-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="funding"
          className="bg-gradient-to-b from-white via-brand-50/30 to-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Cash advance funding
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Revenue-based financing, without the bank delay.
              </h2>
              <p className="mt-3 text-pretty text-slate-600">
                A fast capital advance based on your business revenue. Use it
                for working capital, inventory, payroll, repairs, or expansion.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="relative overflow-hidden rounded-3xl border border-mint-200 bg-white p-7 shadow-glow sm:p-9">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-tr from-mint-500 to-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <Sparkles className="h-3 w-3" />
                  Core product
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                  Merchant Cash Advance
                </h3>
                <p className="mt-3 max-w-2xl text-pretty text-slate-600">
                  Get an advance on future receivables with payments aligned to
                  business activity. It is built for owners who need speed,
                  flexibility, and clear terms.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    'Funding up to $2M',
                    '1 hour decision',
                    'Same day funding available',
                    'No hard credit pull',
                    'Revenue-based repayment',
                    'Low, competitive fees',
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-mint-500" strokeWidth={2.25} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={APPLY}
                  className="mt-8 inline-flex items-center justify-center gap-1 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Apply for an advance
                  <ChevronRight className="h-4 w-4" />
                </a>
              </article>

              <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
                <p className="text-eyebrow font-semibold uppercase text-slate-500">
                  Minimum requirements
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    ['Time in business', '10+ months'],
                    ['Monthly revenue', '$25,000+'],
                    ['FICO', '500+'],
                    ['Bankruptcies', 'None open'],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <span className="text-sm text-slate-500">{label}</span>
                      <span className="font-semibold text-slate-900">{value}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="industries" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <p className="text-eyebrow font-semibold uppercase text-brand-700">
                  Businesses we fund
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Fast approvals for everyday businesses.
                </h2>
                <p className="mt-4 text-pretty text-slate-600">
                  From restaurants to repair shops, BridgeLift Capital evaluates
                  real revenue and business momentum so owners can access
                  capital without traditional bank friction.
                </p>
                <a
                  href={APPLY}
                  className="mt-8 inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-600"
                >
                  See if you qualify
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {industries.map((i) => {
                    const Icon = i.icon;
                    return (
                      <li
                        key={i.name}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-mint-200 hover:bg-mint-50/40"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-mint-50 text-brand-700 ring-1 ring-white">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="text-sm font-medium text-slate-800">
                          {i.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="examples"
          className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-mint-50/40 via-white to-brand-50/30 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Recent fundings
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Recent fundings across real businesses. Fast decisions, real
                capital.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((item) => (
                <article
                  key={item.business}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-mint-100 to-brand-100 opacity-60 blur-2xl transition group-hover:opacity-90"
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-4">
                    <BusinessIcon icon={item.icon} tone={item.tone} size="lg" />
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-slate-900">
                        {item.business}
                      </p>
                      <p className="text-sm text-slate-500">{item.use}</p>
                    </div>
                  </div>

                  <div className="relative mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-eyebrow font-semibold uppercase text-slate-500">
                        Funded $
                      </p>
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        {item.amount}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-mint-50 px-2.5 py-1 text-xs font-semibold text-mint-700 ring-1 ring-mint-100">
                      <Clock3 className="h-3 w-3" />
                      Same day funding
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Our process
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Built for speed. Structured to get deals done.
              </h2>
              <p className="mt-3 text-pretty text-slate-600">
                No runaround. We review quickly, structure the deal, and give
                you a clear answer.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-3">
              {(
                [
                  {
                    step: 'Apply online',
                    d: 'Complete a short form with basic business details and recent activity.',
                  },
                  {
                    step: 'Quick review & decision',
                    d: 'We review revenue and provide a fast, clear response.',
                  },
                  {
                    step: 'Funding completed',
                    d: 'Once approved, funds can be sent as soon as the same business day.',
                  },
                ] as const
              ).map((item, i) => (
                <li
                  key={item.step}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/40 p-6 shadow-soft"
                >
                  <span
                    className="absolute -right-3 -top-3 text-7xl font-bold tabular-nums text-slate-100"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="relative text-lg font-semibold text-slate-900">
                    {item.step}
                  </h3>
                  <p className="relative mt-2 text-sm text-slate-600">
                    {item.d}
                  </p>
                </li>
              ))}
            </ol>

          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-mint-50/30 to-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Why BridgeLift Capital
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A direct lender built around speed, structure, and follow-through.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Zap,
                  t: 'Fast decisions',
                  b: 'Same-day reviews. Clear answers.',
                },
                {
                  icon: Sparkles,
                  t: 'Flexible structuring',
                  b: 'Deals built around real cash flow.',
                },
                {
                  icon: ShieldCheck,
                  t: 'Reliable execution',
                  b: 'From submission to funding—no delays.',
                },
              ].map((x) => {
                const Icon = x.icon;
                return (
                  <div
                    key={x.t}
                    className="rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-soft"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-mint-100 text-brand-700">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">{x.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {x.b}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(40%_40%_at_80%_100%,rgba(14,165,233,0.18),transparent_60%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <blockquote className="text-balance text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              “We know timing is everything in this business. Our job is simple
              — move quickly, structure deals the right way, and get capital
              out without unnecessary delays.”
            </blockquote>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Frequently asked
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Answers, before you apply.
              </h2>
            </div>
            <ul className="mt-10 space-y-3">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <li
                    key={f.q}
                    className={`overflow-hidden rounded-2xl border transition ${
                      isOpen
                        ? 'border-mint-200 bg-mint-50/40 shadow-soft'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-slate-900">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition ${
                          isOpen ? 'rotate-180 text-mint-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-700">
                        {f.a}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="iso"
          className="bg-gradient-to-b from-white to-brand-50/40 py-20 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                ISO partnership
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Become an ISO with BridgeLift.
              </h2>
              <p className="mt-4 text-pretty text-slate-600">
                Strong commissions, fast turnarounds, and underwriters who
                actually pick up the phone. Submit a quick intro and an ISO
                manager will reach out.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {[
                  'Competitive commission structure',
                  'Dedicated ISO manager',
                  '1 hour decision',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-mint-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <form
                onSubmit={onIsoSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
              >
                {submitted === 'iso' ? (
                  <p className="mb-4 rounded-xl border border-mint-200 bg-mint-50 p-3 text-sm text-mint-800">
                    Email opened. If nothing happened, write us at{' '}
                    <a
                      className="font-semibold underline"
                      href="mailto:deals@bridgeliftcapital.com"
                    >
                      deals@bridgeliftcapital.com
                    </a>
                    .
                  </p>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      ['Full name', 'text'],
                      ['Company name', 'text'],
                      ['Company website', 'url'],
                      ['Phone number', 'tel'],
                      ['Email address', 'email'],
                      ['Address', 'text'],
                    ] as const
                  ).map(([label, type]) => {
                    const id = label.toLowerCase().replace(/\s+/g, '-');
                    const isFull = label === 'Address';
                    return (
                      <div key={label} className={isFull ? 'sm:col-span-2' : ''}>
                        <label
                          htmlFor={`iso-${id}`}
                          className="text-sm font-medium text-slate-700"
                        >
                          {label}
                        </label>
                        <input
                          id={`iso-${id}`}
                          name={label}
                          type={type}
                          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-xl bg-gradient-to-tr from-mint-500 to-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-mint-400 hover:to-brand-400"
                >
                  Submit
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  By submitting, you agree to be contacted by BridgeLift Capital.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white py-16">
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
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default App;
