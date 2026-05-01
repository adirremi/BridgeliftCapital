import { type FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Sparkles,
  Users,
} from 'lucide-react';
import PageShell from './PageShell';

type FieldDef = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'number';
  full?: boolean;
  placeholder?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url';
  autoComplete?: string;
  required?: boolean;
};

const fields: FieldDef[] = [
  { name: 'First Name', label: 'First name', type: 'text', autoComplete: 'given-name', required: true },
  { name: 'Last Name', label: 'Last name', type: 'text', autoComplete: 'family-name', required: true },
  { name: 'Company Name', label: 'Company name', type: 'text', autoComplete: 'organization', required: true },
  { name: 'Company Website', label: 'Company website', type: 'url', autoComplete: 'url', placeholder: 'https://' },
  { name: 'Phone', label: 'Phone', type: 'tel', autoComplete: 'tel', inputMode: 'tel', required: true },
  { name: 'Email', label: 'Email', type: 'email', autoComplete: 'email', inputMode: 'email', required: true },
  { name: 'Year Established', label: 'Year established', type: 'number', inputMode: 'numeric', placeholder: 'e.g. 2018' },
  { name: 'Number of Sales Reps', label: 'Number of sales reps', type: 'number', inputMode: 'numeric', placeholder: 'e.g. 8' },
  { name: 'Monthly Funding Volume', label: 'Monthly funding volume', type: 'text', placeholder: 'e.g. $1,500,000', full: true },
];

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/deals@bridgeliftcapital.com';

export default function IsoPartnerPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = {
      _subject: 'New ISO Partner inquiry — bridgeliftcapital.com',
      _template: 'table',
      _captcha: 'false',
      _replyto: (fd.get('Email') as string) ?? '',
    };
    fd.forEach((value, key) => {
      if (typeof value === 'string') payload[key] = value;
    });

    setStatus('submitting');
    setErrorMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = (await res.json().catch(() => ({}))) as { success?: string };
      if (data.success && String(data.success).toLowerCase() !== 'true') {
        throw new Error('Submission was not accepted.');
      }

      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <PageShell active="iso">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh-light" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent_75%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-5">
            <p className="text-eyebrow font-semibold uppercase text-brand-700">
              ISO partnership
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Become an ISO with BridgeLift.
            </h1>
            <p className="mt-4 text-pretty text-lg text-slate-600">
              Strong commissions, fast turnarounds, and underwriters who
              actually pick up the phone. Submit a quick intro and an ISO
              manager will reach out.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              {(
                [
                  ['Competitive commission structure', Sparkles],
                  ['Dedicated ISO manager', Users],
                  ['1 hour decisions', Clock3],
                  ['Funding up to $2M per file', CheckCircle2],
                ] as const
              ).map(([label, Icon]) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-mint-600" strokeWidth={2.25} />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-600 backdrop-blur">
              <p className="font-semibold text-slate-900">
                Why ISOs partner with us
              </p>
              <p className="mt-2">
                We move quickly, structure deals around real cash flow, and
                follow through from submission to funding — so you can focus
                on closing more business.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-brand-100/60 via-white to-mint-100/60 blur-2xl"
              aria-hidden
            />
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
              noValidate
            >
              <h2 className="text-xl font-semibold text-slate-900">
                ISO partner inquiry
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Submissions are sent securely to{' '}
                <a
                  href="mailto:deals@bridgeliftcapital.com"
                  className="font-medium text-brand-700 hover:underline"
                >
                  deals@bridgeliftcapital.com
                </a>
                .
              </p>

              {status === 'success' ? (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-mint-200 bg-mint-50 p-4 text-sm text-mint-800"
                >
                  <p className="font-semibold">Inquiry received.</p>
                  <p className="mt-1">
                    Thanks — an ISO manager will be in touch shortly. For
                    anything urgent, call{' '}
                    <a className="font-semibold underline" href="tel:6466991125">
                      646-699-1125
                    </a>
                    .
                  </p>
                </div>
              ) : null}

              {status === 'error' ? (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"
                >
                  <p className="font-semibold">Could not send your inquiry.</p>
                  <p className="mt-1">
                    {errorMsg ?? 'Please try again or email us directly at '}
                    <a
                      href="mailto:deals@bridgeliftcapital.com"
                      className="font-semibold underline"
                    >
                      deals@bridgeliftcapital.com
                    </a>
                    .
                  </p>
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {fields.map((f) => {
                  const id = `iso-${f.name.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                    <div key={f.name} className={f.full ? 'sm:col-span-2' : ''}>
                      <label
                        htmlFor={id}
                        className="text-sm font-medium text-slate-700"
                      >
                        {f.label}
                        {f.required ? (
                          <span className="ml-1 text-rose-500" aria-hidden>
                            *
                          </span>
                        ) : null}
                      </label>
                      <input
                        id={id}
                        name={f.name}
                        type={f.type}
                        inputMode={f.inputMode}
                        autoComplete={f.autoComplete}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-xl bg-gradient-to-tr from-mint-500 to-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-mint-400 hover:to-brand-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? 'Submitting…' : 'Apply'}
                {status === 'submitting' ? null : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </button>

              <p className="mt-3 text-xs text-slate-500">
                By submitting, you agree to be contacted by BridgeLift Capital.
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
