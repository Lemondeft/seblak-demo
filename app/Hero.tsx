"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";

const WA_BASE = "https://wa.me/6285876087735";

/* TERKINI photos, straight from the original site's carousel */
const SLIDES = [
  { src: "/carousel/img.webp", alt: "Outlet SeblakHOT MamaRizki" },
  { src: "/carousel/35093_20260525090329.webp", alt: "Menu seblak 1" },
  { src: "/carousel/35094_20260525090339.webp", alt: "Menu seblak 2" },
  { src: "/carousel/35095_20260525090347.webp", alt: "Menu seblak 3" },
];

/* heat ramps up along the scale: honey -> amber -> chili -> deep */
const SPICE_COLORS = [
  { bg: "#d9a13b", fg: "#1d1712" },
  { bg: "#d9a13b", fg: "#1d1712" },
  { bg: "#dfa93c", fg: "#1d1712" },
  { bg: "#e09a2e", fg: "#1d1712" },
  { bg: "#dd8a24", fg: "#1d1712" },
  { bg: "#d97a1e", fg: "#1d1712" },
  { bg: "#cf6418", fg: "#f7f1e6" },
  { bg: "#c8102e", fg: "#f7f1e6" },
  { bg: "#a80f22", fg: "#f7f1e6" },
  { bg: "#7c0a18", fg: "#f7f1e6" },
];

const LEVEL_NOTES: Record<number, string> = {
  0: "Ketuk buat milih level — makin ke kanan, makin berani.",
  1: "Aman banget. Seblaknya yang kencang, mulutmu yang santai.",
  2: "Aman banget. Seblaknya yang kencang, mulutmu yang santai.",
  3: "Masih ramah. Cocok buat yang baru kenal seblak.",
  4: "Masih ramah. Cocok buat yang baru kenal seblak.",
  5: "Pas di tengah. Nagih, tapi masih bisa ngobrol sambil makan.",
  6: "Pas di tengah. Nagih, tapi masih bisa ngobrol sambil makan.",
  7: "Serius pedas. Siapin es teh, jangan cuma segar.",
  8: "Serius pedas. Siapin es teh, jangan cuma segar.",
  9: "Kami sudah kasih peringatan. Kamu tetep nekat.",
  10: "LEVEL BIANG NANGIS. Kamu yakin? …Oke, kami hormat.",
};

export default function Hero() {
  const [level, setLevel] = useState(0);
  const [slide, setSlide] = useState(0);
  const touchX = useRef<number | null>(null);
  const maxed = level === 10;

  /* auto-rotate like the original site's carousel (3s) */
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      setSlide((s) => (s + (dx > 0 ? -1 : 1) + SLIDES.length) % SLIDES.length);
    }
    touchX.current = null;
  };

  const waLink =
    level > 0
      ? `${WA_BASE}?text=${encodeURIComponent(
          `Halo Seblak Mama Rizki, saya mau pesan seblak level ${level}.`
        )}`
      : `${WA_BASE}?text=${encodeURIComponent(
          "Halo Seblak Mama Rizki, saya mau pesan."
        )}`;

  return (
    <>
      {/* ── cover: full-bleed carousel, magazine front page ─────────── */}
      <section
        className="relative h-[58vh] min-h-[340px] w-full overflow-hidden sm:h-[68vh]"
        aria-label="Terkini — foto terbaru"
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${slide * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {SLIDES.map((s) => (
            <div key={s.src} className="relative h-full w-full flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* caption plate — the magazine cover line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent pb-5 pt-16">
          <div className="mx-auto flex max-w-[880px] items-end justify-between gap-4 px-5">
            <div className="text-paper">
              <p className="kicker text-honey">Terkini</p>
              <p className="font-display mt-1 text-[1.15rem] leading-tight sm:text-[1.4rem]">
                Dari dapur kami, hari ini.
              </p>
            </div>
            <div className="flex gap-2 pb-1" role="tablist" aria-label="Pilih foto">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Foto ${i + 1}`}
                  aria-pressed={i === slide}
                  className={`h-2.5 w-2.5 rounded-full border border-paper/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper ${
                    i === slide ? "bg-honey" : "bg-paper/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── intro spread ─────────────────────────────────────────────── */}
      <section className="px-5 pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-[880px]">
          <p className="kicker text-chili">Edisi harian · Semarang</p>
          <h1 className="font-display mt-3 text-[clamp(2.4rem,10vw,4.6rem)] leading-[0.98]">
            SeblakHOT
            <br />
            <span className="italic">MamaRizki</span>
          </h1>

          <div className="mt-8 grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:gap-12">
            <p className="dropcap max-w-[52ch] text-[1.02rem] leading-[1.75] text-ink">
              Kuah pedas dimasak fresh tiap hari. Pilih level pedasnya sendiri
              — dari yang aman sampai yang bikin nangis. Racik prasmananmu,
              pilih topping favorit, dan pesan langsung lewat WhatsApp.
            </p>
            <dl className="self-end border-t border-ink pt-4 text-[0.9rem]">
              <div className="flex justify-between gap-4 py-1.5">
                <dt className="text-ink-soft">Buka</dt>
                <dd className="text-right font-semibold">
                  Sen–Jum 10.00–21.00
                  <br />
                  Sab–Min 11.00–21.00
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-line py-1.5">
                <dt className="text-ink-soft">Paket mulai</dt>
                <dd className="font-semibold text-price">Rp 10.000</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-line py-1.5">
                <dt className="text-ink-soft">Level pedas</dt>
                <dd className="font-semibold">1 – 10</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── the heat gauge ───────────────────────────────────────────── */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[880px]">
          <div className="flex items-baseline gap-3 border-b border-ink pb-3">
            <span className="kicker text-chili">01</span>
            <h2 className="font-display text-[clamp(1.8rem,7vw,2.6rem)] leading-none">
              Seberapa berani kamu?
            </h2>
          </div>

          <div
            className="gauge mt-8 border border-ink bg-paper p-5 sm:p-7"
            role="group"
            aria-label="Pilih level pedas 1 sampai 10"
            style={{ "--heat": String(level / 10) } as CSSProperties}
          >
            <div className="flex items-end justify-between gap-3">
              <span
                className={`font-display text-[clamp(2.4rem,10vw,4rem)] leading-none tabular-nums ${
                  level > 0 ? "" : "opacity-40"
                }`}
                style={
                  level > 0 ? { color: SPICE_COLORS[level - 1].bg } : undefined
                }
                aria-live="polite"
              >
                {level > 0 ? `Level ${level}` : "Level —"}
              </span>
              {maxed && (
                <span className="shake kicker mb-2 rounded-full border border-chili px-3 py-1 text-chili">
                  Level maksimal
                </span>
              )}
            </div>

            <div className="mt-6 grid grid-cols-10 gap-1.5">
              {SPICE_COLORS.map((c, i) => {
                const n = i + 1;
                const active = n <= level;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setLevel(n)}
                    aria-pressed={level === n}
                    aria-label={`Level ${n}`}
                    className={`h-10 border font-display text-[0.8rem] leading-none transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink sm:h-12 ${
                      active
                        ? "border-ink"
                        : "border-line text-ink-soft hover:border-ink hover:text-ink"
                    } ${level === n ? "-translate-y-0.5" : ""}`}
                    style={
                      active
                        ? { backgroundColor: c.bg, color: c.fg }
                        : undefined
                    }
                  >
                    {n}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 min-h-10 text-[0.92rem] leading-snug text-ink-soft">
              {LEVEL_NOTES[level]}
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-honey rise mt-8 inline-block rounded-full px-8 py-4 text-[1.05rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            style={{ animationDelay: "0.2s" }}
          >
            {level > 0
              ? `Pesan level ${level} via WhatsApp`
              : "Pesan via WhatsApp"}
          </a>
        </div>
      </section>
    </>
  );
}
