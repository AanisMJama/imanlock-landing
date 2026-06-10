"use client";

type BadgeProps = {
  href?: string;
  comingSoon?: boolean;
  className?: string;
};

export function GooglePlayBadge({
  href = "#download",
  comingSoon = false,
  className = "",
}: BadgeProps) {
  return (
    <a
      href={href}
      aria-label="Get it on Google Play"
      className={`group relative inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <svg viewBox="0 0 512 512" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path
          d="M48 59.49v393a4 4 0 0 0 6.83 2.83l185.5-185.5a4 4 0 0 0 0-5.66L54.83 56.66A4 4 0 0 0 48 59.49Z"
          fill="#00D9FF"
        />
        <path
          d="M345.8 174 89.22 18.76C77.5 11.66 64.49 12 54.83 18.49l201.69 201.69Z"
          fill="#00F076"
        />
        <path
          d="M345.8 338 256.52 271.83 54.83 473.51c9.66 6.49 22.67 6.83 34.39-.25L345.8 338Z"
          fill="#FF3A44"
        />
        <path
          d="M412.21 270.34 345.8 174l-89.28 86.13L345.8 338l66.41-37.85c19.06-10.85 19.06-39 0-49.81Z"
          fill="#FFD500"
        />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide text-white/70">
          {comingSoon ? "Coming soon on" : "Get it on"}
        </span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreBadge({
  href = "#download",
  comingSoon = true,
  className = "",
}: BadgeProps) {
  return (
    <a
      href={href}
      aria-label="Download on the App Store"
      className={`group relative inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 shrink-0 fill-white" aria-hidden="true">
        <path d="M318.7 268c-.2-37 16.6-65 50.6-86-19-27-47.5-42-85.6-45-36-3-75 21-89 21-14 0-49-20-78-19-40 .6-77 23-98 59-42 73-11 181 30 240 20 29 44 62 75 60 30-1 41-19 78-19 36 0 47 19 78 18 32-.5 53-29 73-58 14-21 25-44 31-67-1-1-59-23-59-90zM262 60c17-21 28-50 25-79-25 1-55 17-73 38-16 18-30 47-26 75 28 2 56-14 74-34z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide text-white/70">
          {comingSoon ? "Coming soon on the" : "Download on the"}
        </span>
        <span className="text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}
