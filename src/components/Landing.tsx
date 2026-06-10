import { HeroPhone } from "@/components/phone/HeroPhone";
import { GooglePlayBadge, AppStoreBadge } from "@/components/StoreBadges";
import { SiteFooter } from "@/components/site/SiteFooter";

export function Landing() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8">
          {/* Headline */}
          <div className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-black sm:text-6xl lg:text-7xl">
              your phone is
              <br />
              taking you
              <br />
              <span className="text-iman-primary">
                away from
                <br />
                Allah
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-slate-600 sm:text-xl lg:mx-0">
              block distracting apps until you{" "}
              <span className="font-semibold text-iman-primary">
                remember Allah
              </span>
            </p>
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
            <AppStoreBadge href="#" comingSoon={false} />
            <GooglePlayBadge href="#" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter bordered={false} />
    </main>
  );
}
