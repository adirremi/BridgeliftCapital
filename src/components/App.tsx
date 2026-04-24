import { type FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  HeartPulse,
  Menu,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Utensils,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const APPLY = 'https://bridgeliftcapital.com/apply-now/';
const TERMS = 'https://bridgeliftcapital.com/terms-condition/';
const PRIVACY = 'https://bridgeliftcapital.com/privacy-policy/';

const nav = [
  { href: '#funding', label: 'Funding' },
  { href: '#industries', label: 'Industries' },
  { href: '#how', label: 'How it works' },
  { href: '#stories', label: 'Customers' },
  { href: '#faq', label: 'FAQ' },
] as const;

type Story = {
  name: string;
  industry: string;
  amount: string;
  city: string;
  img: string;
};

const stories: Story[] = [
  {
    name: 'Lina M.',
    industry: 'Salon owner',
    amount: '$25,000',
    city: 'Brooklyn, NY',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=240&h=240&fit=crop&auto=format&q=70',
  },
  {
    name: 'Jonathan R.',
    industry: 'Pet grooming',
    amount: '$75,000',
    city: 'Queens, NY',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&auto=format&q=70',
  },
  {
    name: 'Emma S.',
    industry: 'Coffee shop',
    amount: '$5,000',
    city: 'Manhattan, NY',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&fit=crop&auto=format&q=70',
  },
  {
    name: 'Ahmed K.',
    industry: 'Auto repair',
    amount: '$120,000',
    city: 'Newark, NJ',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=240&h=240&fit=crop&auto=format&q=70',
  },
  {
    name: 'Maria G.',
    industry: 'Restaurant',
    amount: '$60,000',
    city: 'Bronx, NY',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&auto=format&q=70',
  },
  {
    name: 'David L.',
    industry: 'Construction',
    amount: '$200,000',
    city: 'Long Island, NY',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&auto=format&q=70',
  },
];

const heroStack: Story[] = stories.slice(0, 3);

const industries = [
  { icon: Wrench, name: 'Auto body & repair' },
  { icon: Utensils, name: 'Restaurants & food' },
  { icon: HeartPulse, name: 'Healthcare & medical' },
  { icon: Truck, name: 'Transportation' },
  { icon: Building2, name: 'Construction' },
  { icon: ShoppingBag, name: 'Retail & e-commerce' },
] as const;

const stats = [
  { v: '$2M', l: 'Up to per business' },
  { v: '24h', l: 'Average funding time' },
  { v: '10mo', l: 'Minimum time in business' },
  { v: '500+', l: 'FICO accepted' },
];

const faqs = [
  {
    q: 'Will applying affect my credit score?',
    a: 'No. We only run a soft credit pull during pre-qualification, which never impacts your credit score.',
  },
  {
    q: 'How quickly can I get funded?',
    a: 'Most qualified businesses receive a decision the same day, with funds wired within 24–48 hours after final approval.',
  },
  {
    q: 'What can I use the funds for?',
    a: 'Inventory, payroll, equipment, repairs, marketing, expansion, refinancing, or any other working-capital need.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'Typically the last 3 months of business bank statements and a quick online application — that’s it.',
  },
  {
    q: 'Do you work with all industries?',
    a: 'Bridge Lift Capital is industry-agnostic and partners with most B2B and B2C businesses across the United States.',
  },
];

function buildMailto(subject: string, data: Record<string, string>) {
  const body = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  return `mailto:deals@bridgeliftcapital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function CircleAvatar({ src, alt, size = 'md' }: { src: string; alt: string; size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'h-16 w-16' : size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
  return (
    <span
      className={`relative inline-block ${dim} shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function ApprovalCard({
  story,
  className = '',
}: {
  story: Story;
  className?: string;
}) {
  return (
    <div
      className={`flex w-72 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-soft backdrop-blur ${className}`}
    >
      <CircleAvatar src={story.img} alt={story.name} size="lg" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-slate-900">
            {story.name}
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-50 px-2 py-0.5 text-[11px] font-medium text-mint-600 ring-1 ring-mint-100">
            <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
            Approved
          </span>
        </div>
        <p className="mt-0.5 truncate text-xs text-slate-500">
          {story.industry} · {story.city}
        </p>
        <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
          {story.amount}
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
            Soft credit pull only · No impact on your score
          </p>
          <div className="hidden items-center gap-3 text-mint-700 sm:flex">
            <span className="inline-flex items-center gap-1 font-medium">
              <Star className="h-3.5 w-3.5 fill-current text-amber-400" /> 4.9
              avg
            </span>
            <span aria-hidden>·</span>
            <span>BBB-grade reviews</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a className="flex min-w-0 items-center gap-2" href="#">
            <img
              src="/Bridge-Lift-Capital.webp"
              alt="Bridge Lift Capital"
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
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-brand-500 hover:to-brand-400"
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
          <div
            className="absolute inset-0 -z-10 bg-mesh-light"
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent_75%)]"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-white/80 px-3 py-1 text-xs font-semibold text-mint-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
                </span>
                SAME-DAY APPROVAL · NO HARD CREDIT PULL
              </p>

              <h1 className="mt-5 text-balance font-semibold tracking-tight text-slate-900 text-display">
                Working capital
                <br />
                that moves at the
                <span className="bg-gradient-to-r from-brand-600 via-mint-500 to-brand-500 bg-clip-text text-transparent">
                  {' '}speed of your business
                </span>
                .
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-lg text-slate-600">
                Up to{' '}
                <span className="font-semibold text-slate-900">$2 million</span>{' '}
                in flexible funding for established small businesses. Apply in
                minutes — soft credit only, real humans, real answers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={APPLY}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-slate-800"
                >
                  Get my offer
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
                  ['Funds in 24 hours', Zap],
                  ['Industry-agnostic', Award],
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
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Funded this week
                      </p>
                      <p className="mt-2 text-4xl font-bold text-slate-900">
                        $4.6M+
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        across 38 businesses
                      </p>
                    </div>
                  </div>
                </div>

                <ApprovalCard
                  story={heroStack[0]}
                  className="absolute left-0 top-2 -rotate-3 animate-floaty"
                />
                <ApprovalCard
                  story={heroStack[1]}
                  className="absolute right-0 top-32 rotate-2 animate-floaty [animation-delay:1.2s]"
                />
                <ApprovalCard
                  story={heroStack[2]}
                  className="absolute bottom-0 left-6 -rotate-2 animate-floaty [animation-delay:2.4s]"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white/60 backdrop-blur">
            <div className="mask-fade-x mx-auto max-w-6xl overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-12 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                {[
                  'BBB Accredited',
                  '$250M+ funded',
                  '10,000+ businesses',
                  'Same-day funding',
                  'A+ rated',
                  'Trusted by ISOs',
                  'BBB Accredited',
                  '$250M+ funded',
                  '10,000+ businesses',
                  'Same-day funding',
                  'A+ rated',
                  'Trusted by ISOs',
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
                Funding products
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Choose the right capital for your moment.
              </h2>
              <p className="mt-3 text-pretty text-slate-600">
                Cover gaps, stock up, hire, expand. Pick what fits — switch when
                your needs evolve.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  badge: 'Most popular',
                  highlight: true,
                  name: 'Working Capital Advance',
                  desc: 'A lump sum based on your future receivables. Fixed daily or weekly remittance — no surprises.',
                  pts: ['Up to $2M', '6–18 month terms', 'Funded in 24 hours'],
                },
                {
                  name: 'Business Line of Credit',
                  desc: 'A revolving line you draw from when you need it. Pay only for what you use.',
                  pts: ['Up to $250K', 'Refresh as you repay', 'Same-day draws'],
                },
                {
                  name: 'Equipment & Expansion',
                  desc: 'Term-based capital for vehicles, build-outs, or major expansion projects.',
                  pts: ['Up to $1M', 'Longer terms', 'Tailored to your sector'],
                },
              ].map((p) => (
                <article
                  key={p.name}
                  className={`relative flex flex-col rounded-3xl border p-6 transition sm:p-7 ${
                    p.highlight
                      ? 'border-mint-200 bg-white shadow-glow'
                      : 'border-slate-200 bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-md'
                  }`}
                >
                  {p.badge ? (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-tr from-mint-500 to-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                      <Sparkles className="h-3 w-3" />
                      {p.badge}
                    </span>
                  ) : null}
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {p.pts.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-mint-500"
                          strokeWidth={2.25}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APPLY}
                    className={`mt-7 inline-flex items-center justify-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      p.highlight
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    See if you qualify
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <p className="text-eyebrow font-semibold uppercase text-brand-700">
                  Industries we serve
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Tailored capital for the industries you work in.
                </h2>
                <p className="mt-4 text-pretty text-slate-600">
                  Bridge Lift Capital is industry-agnostic — but we know small
                  businesses run on different rhythms. We design funding around
                  the cycles of your sector.
                </p>
                <a
                  href={APPLY}
                  className="mt-8 inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-600"
                >
                  Find my fit
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
          id="stories"
          className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-mint-50/40 via-white to-brand-50/30 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-eyebrow font-semibold uppercase text-brand-700">
                  Real businesses · Real funding
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Owners we’ve helped go from gap to growth.
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                Examples shown for illustration. Approved amounts vary.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((s) => (
                <article
                  key={s.name + s.industry}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-mint-100 to-brand-100 opacity-60 blur-2xl transition group-hover:opacity-90"
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-4">
                    <CircleAvatar src={s.img} alt={s.name} size="lg" />
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-slate-900">
                        {s.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {s.industry} · {s.city}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-eyebrow font-semibold uppercase text-slate-500">
                        Approved for
                      </p>
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        {s.amount}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-mint-50 px-2.5 py-1 text-xs font-semibold text-mint-700 ring-1 ring-mint-100">
                      <Clock3 className="h-3 w-3" />
                      Funded in 24h
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Three steps. No surprises.
              </h2>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-3">
              {(
                [
                  {
                    step: 'Apply',
                    d: 'Complete our short online application in minutes — no documents pile.',
                  },
                  {
                    step: 'Get approved',
                    d: 'Receive a soft-credit decision the same day with transparent terms.',
                  },
                  {
                    step: 'Receive funding',
                    d: 'Funds wired to your business account, often within 24 hours.',
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

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  t: 'No hard credit pull',
                  b: 'Soft credit pulls only — your score stays untouched.',
                },
                {
                  icon: CheckCircle2,
                  t: 'High approval rate',
                  b: 'Industry-agnostic underwriting that says yes more often.',
                },
                {
                  icon: Zap,
                  t: 'Low, competitive fees',
                  b: 'Transparent pricing so you keep more of your cash.',
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

        <section className="bg-gradient-to-b from-white to-mint-50/40 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-5">
                <p className="text-eyebrow font-semibold uppercase text-brand-700">
                  Minimum requirements
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Quick eligibility — verified during your application.
                </h2>
                <p className="mt-4 text-pretty text-slate-600">
                  No long checklist. Most owners qualify with a soft pull and a
                  few months of business bank statements.
                </p>
                <a
                  href={APPLY}
                  className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Check eligibility
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {[
                  { l: 'Time in business', v: '10+ months' },
                  { l: 'Monthly revenue', v: '$15,000+' },
                  { l: 'FICO', v: '500+' },
                  { l: 'Bankruptcies', v: 'None open' },
                ].map((r) => (
                  <li
                    key={r.l}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                  >
                    <p className="text-eyebrow font-semibold uppercase text-slate-500">
                      {r.l}
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                      {r.v}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(40%_40%_at_80%_100%,rgba(14,165,233,0.18),transparent_60%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-eyebrow font-semibold uppercase text-mint-400">
              Fueling the future for small businesses
            </p>
            <blockquote className="mt-6 text-balance text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              “Our mission is to empower businesses with fast, flexible funding
              solutions, so they can focus on what truly matters — growing and
              succeeding.”
            </blockquote>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 font-bold text-white">
                MJ
              </span>
              <span className="text-left text-sm text-slate-200">
                <span className="block font-semibold">Michael J.</span>
                <span className="text-slate-400">CEO, Bridge Lift Capital</span>
              </span>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-eyebrow font-semibold uppercase text-brand-700">
                Frequently asked
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Answers, before you ask.
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
                Become an ISO with Bridge Lift.
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
                  'Same-day decisions on most files',
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
                    <a className="font-semibold underline" href="mailto:deals@bridgeliftcapital.com">
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
                  className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-xl bg-gradient-to-tr from-brand-600 to-mint-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-brand-500 hover:to-mint-400"
                >
                  Submit
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  By submitting, you agree to be contacted by Bridge Lift Capital.
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
              © {new Date().getFullYear()} Bridge Lift Capital. All rights
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
