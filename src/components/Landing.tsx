import { HeroPhone } from "@/components/phone/HeroPhone";
import { GooglePlayBadge, AppStoreBadge } from "@/components/StoreBadges";
import { SiteFooter } from "@/components/site/SiteFooter";

const APP_STORE_URL = "https://apps.apple.com/";

export function Landing() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8">
          {/* Headline */}
          <div className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Pause.
              <br />
              Remember Allah.
              <br />
              <span className="text-iman-primary">
                Return with
                <br />
                Intention.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-slate-600 sm:text-xl lg:mx-0">
              While scrolling social media,{" "}
              <span className="font-semibold text-iman-primary">remember Allah</span>
              .
            </p>

            <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-iman-primary px-7 py-3.5 text-base font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
              >
                Download ImanFocus
              </a>
            </div>
          </div>

          {/* Phone preview inside green panel */}
          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="relative mx-auto flex max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] bg-iman-primary px-6 py-10 shadow-card-lg sm:px-10 sm:py-14">
              {/* ambient depth */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-iman-dark/40 blur-3xl" />
              <div className="relative">
                <HeroPhone />
              </div>
            </div>
          </div>

          {/* Download badges */}
          <div className="order-3 flex flex-wrap items-center justify-center gap-3 lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-start">
            <AppStoreBadge href={APP_STORE_URL} comingSoon={false} />
            <GooglePlayBadge comingSoon />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter bordered={false} />
    </main>
  );
}
