import {
  AlertTriangle,
  Banknote,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Coins,
  Download,
  FileCheck2,
  FileText,
  Info,
  LineChart,
  Phone,
  Printer,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

type GuidelineRow = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const guidelines: GuidelineRow[] = [
  { label: 'Max Positions', value: '1st – 6th', icon: LineChart },
  { label: 'Min. Monthly Revenue', value: '$50,000.00', icon: Wallet },
  { label: 'Minimum Time in Business', value: '10 months', icon: Building2 },
  {
    label: 'Max Term (Daily / Weekly)',
    value: '150 Days  /  30 Weeks',
    icon: CalendarDays,
  },
  { label: 'Max Funding', value: '$250,000.00', icon: Banknote },
  { label: 'Commission Points', value: 'Max upsell 12 points', icon: TrendingUp },
  { label: 'Buy Rates', value: '1.29 – 1.38', icon: Coins },
];

type ProcessItem = {
  label: string;
  note?: string;
  icon: LucideIcon;
};

const process: ProcessItem[] = [
  { label: 'ID & Voided Check', icon: FileCheck2 },
  { label: 'POO', icon: ClipboardList },
  { label: 'CC Processing Statements', note: 'If applicable', icon: FileText },
  { label: 'AR Report', note: 'If applicable', icon: FileText },
  { label: 'Bank Verification', icon: ShieldAlert },
  { label: 'Funding Call', icon: Phone },
];

const restricted: string[] = [
  'Legal Services, Cannabis, Financial Services, Auto Sales, Non-Profit / Religious',
  'Trucking & Construction — minimum monthly revenue of $100k and 3 years TIB',
  'Currently not funding in TX, PR and Canada',
];

export type GuidelinesContact =
  | {
      kind: 'default';
    }
  | {
      kind: 'personal';
      name: string;
      email: string;
      phone: string;
    };

const DEFAULT_CONTACT: GuidelinesContact = {
  kind: 'personal',
  name: 'Clay Evans',
  email: 'clay@bridgeliftcapital.com',
  phone: '(502) 526-3665',
};

export default function FundingGuidelinesPage({
  contact = DEFAULT_CONTACT,
}: {
  contact?: GuidelinesContact;
}) {
  return (
    <div className="bg-slate-100 text-slate-800 print:bg-white">
      {/* Screen-only toolbar */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-[860px] items-center justify-between gap-3 px-5 py-3">
          <a className="flex items-center gap-2" href="/">
            <img
              src="/Bridge-Lift-Capital.webp"
              alt="BridgeLift Capital"
              className="h-9 w-auto"
            />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Back to site
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-tr from-mint-500 to-brand-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-mint-400 hover:to-brand-400"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* The printable A4 sheet */}
      <main className="mx-auto flex max-w-[860px] flex-col items-stretch px-4 py-8 print:max-w-none print:p-0">
        <article className="sheet relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft print:rounded-none print:border-0 print:shadow-none">
          {/* Decorative background — keeps in print via -webkit-print-color-adjust */}
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-light"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent_75%)]"
            aria-hidden
          />

          <div className="relative flex h-full flex-col px-10 py-9 print:px-12 print:py-10">
            {/* HEADER */}
            <header className="flex items-start justify-between gap-6">
              <div>
                <p className="text-eyebrow font-semibold uppercase text-brand-700">
                  Partner resources
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-[2.6rem]">
                  Funding{' '}
                  <span className="bg-gradient-to-r from-brand-600 via-mint-500 to-brand-500 bg-clip-text text-transparent">
                    Guidelines
                  </span>
                </h1>
              </div>
              <img
                src="/Bridge-Lift-Capital.webp"
                alt="BridgeLift Capital"
                className="h-12 w-auto shrink-0"
              />
            </header>

            {/* HERO STATS */}
            <section className="mt-7 grid grid-cols-3 gap-3">
              {[
                { v: '$250K', l: 'Max funding', icon: Banknote },
                { v: '1.29–1.38', l: 'Buy rates', icon: Coins },
                { v: '1 hr', l: 'Decision speed', icon: Sparkles },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-3.5 shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-mint-50 text-brand-700 ring-1 ring-white">
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </span>
                      <p className="text-eyebrow font-semibold uppercase text-slate-500">
                        {s.l}
                      </p>
                    </div>
                    <p className="mt-2 bg-gradient-to-br from-brand-600 to-mint-500 bg-clip-text text-2xl font-bold text-transparent">
                      {s.v}
                    </p>
                  </div>
                );
              })}
            </section>

            {/* GUIDELINES CARD */}
            <section className="mt-6 rounded-3xl border border-mint-200 bg-white p-6 shadow-glow print:shadow-none">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-tr from-mint-500 to-brand-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-md">
                    <Sparkles className="h-3 w-3" />
                    Core
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                    Guidelines
                  </h2>
                </div>
                <p className="text-eyebrow font-semibold uppercase text-slate-400">
                  Updated {new Date().getFullYear()}
                </p>
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {guidelines.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3.5 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-mint-600 ring-1 ring-slate-200">
                          <Icon className="h-4 w-4" strokeWidth={1.9} />
                        </span>
                        <span className="truncate text-[13px] text-slate-500">
                          {row.label}
                        </span>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-slate-900">
                        {row.value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* FUNDING PROCESS */}
            <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft print:shadow-none">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-100 to-mint-100 text-brand-700">
                  <ClipboardList className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                  Funding Process
                </h2>
                <p className="ml-auto text-eyebrow font-semibold uppercase text-slate-400">
                  What we&rsquo;ll need
                </p>
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {process.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li
                      key={p.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/40 px-3.5 py-2.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-50 text-mint-600 ring-1 ring-mint-100">
                        <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {p.label}
                        </p>
                        {p.note ? (
                          <p className="text-[11px] text-slate-500">{p.note}</p>
                        ) : null}
                      </div>
                      <Icon
                        className="ml-auto h-4 w-4 shrink-0 text-slate-300"
                        strokeWidth={1.6}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* RESTRICTED */}
            <section className="mt-5 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-soft print:shadow-none">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <AlertTriangle className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                  Restricted
                </h2>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-amber-700 ring-1 ring-amber-200">
                  Please review
                </span>
              </div>

              <ul className="mt-3 grid gap-1.5">
                {restricted.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {line}
                  </li>
                ))}
              </ul>

              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-amber-200">
                <Info className="h-3 w-3 text-amber-600" />
                Aggressive discounted payoff letter
              </p>
            </section>

            {/* FOOTER */}
            <footer className="mt-auto pt-6">
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-mint-100 text-brand-700">
                    <Phone className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  {contact.kind === 'personal' ? (
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">
                        {contact.name}
                      </p>
                      <p className="text-slate-600">
                        <a
                          className="hover:text-brand-700"
                          href={`mailto:${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </p>
                      <p className="text-slate-500">
                        <a
                          className="hover:text-brand-700"
                          href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                        >
                          {contact.phone}
                        </a>
                      </p>
                    </div>
                  ) : (
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">
                        Send your files today with the 2 emails below.
                      </p>
                      <p className="text-slate-600">
                        <a
                          className="hover:text-brand-700"
                          href="mailto:deals@bridgeliftcapital.com"
                        >
                          deals@bridgeliftcapital.com
                        </a>
                        {' · '}
                        <a
                          className="hover:text-brand-700"
                          href="mailto:uw@bridgeliftcapital.com"
                        >
                          uw@bridgeliftcapital.com
                        </a>
                      </p>
                      <p className="text-slate-500">
                        <a className="hover:text-brand-700" href="tel:+16466991125">
                          (646) 699-1125
                        </a>
                        {' · 115 W 30th St #1110B, New York, NY 10001'}
                      </p>
                    </div>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                  bridgeliftcapital.com
                </span>
              </div>
            </footer>
          </div>
        </article>

        {/* Screen-only helper */}
        <p className="mt-4 text-center text-xs text-slate-500 print:hidden">
          <Printer className="mr-1 inline h-3 w-3 -translate-y-px" /> Tip: use
          your browser&rsquo;s Print dialog and choose <em>Save as PDF</em> for
          a pixel-perfect export.
        </p>
      </main>
    </div>
  );
}
