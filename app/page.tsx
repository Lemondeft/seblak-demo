import Hero from "./Hero";
import Image from "next/image";

const WA_BASE = "https://wa.me/6285876087735";
const waOrder = (item: string) =>
  `${WA_BASE}?text=${encodeURIComponent(`Halo Seblak Mama Rizki, saya mau pesan ${item}.`)}`;
const WA_LINK = `${WA_BASE}?text=${encodeURIComponent(
  "Halo Seblak Mama Rizki, saya mau pesan."
)}`;

/* Real paket photos from the original site's uploads.
   Exact prices live in the owner's database — only DB-confirmed
   numbers are shown. */
const PAKET = [
  { nama: "Seblak Original", foto: "/paket/original.webp", harga: "Rp 10.000" },
  { nama: "Seblak Ceker", foto: "/paket/ceker.webp" },
  { nama: "Seblak Bakso Jumbo", foto: "/paket/bakso_jumbo.webp" },
  { nama: "Seblak Cuanki", foto: "/paket/cuanki.webp" },
  { nama: "Seblak Kwetiau", foto: "/paket/kwetiau.webp" },
  { nama: "Seblak Seafood", foto: "/paket/seafood.webp" },
  { nama: "Seblak Jamur", foto: "/paket/seblak_jamur.webp" },
  { nama: "Seblak Sosis Bakso", foto: "/paket/seblak_sosis_bakso.webp" },
];

const TOPPINGS = [
  { nama: "Ceker", foto: "/topping/ceker.webp" },
  { nama: "Sosis", foto: "/topping/sosis.webp" },
  { nama: "Bakso", foto: "/topping/bakso.webp" },
  { nama: "Telur", foto: "/topping/telur.webp" },
  { nama: "Mie", foto: "/topping/mie.webp" },
  { nama: "Cuanki Lidah", foto: "/topping/cuanki_lidah.webp" },
  { nama: "Cireng", foto: "/topping/cireng.webp" },
  { nama: "Jamur Enoki", foto: "/topping/jamur_enoki.webp" },
  { nama: "Dumpling Ayam", foto: "/topping/dumpling_ayam.webp" },
  { nama: "Sosis Jumbo", foto: "/topping/sosis_jumbo.webp" },
  { nama: "Fishroll", foto: "/topping/fishroll.webp" },
  { nama: "Indomie", foto: "/topping/indomie.webp" },
];

/* Review format referenced from the original site's ulasan modal */
const ULASAN = [
  {
    nama: "Dinda",
    rating: 5,
    tanggal: "12/05/2026",
    komentar:
      "Level 5 udah nagih. Kuahnya beda dari seblak lain, bumbunya kerasa fresh.",
  },
  {
    nama: "Bagas",
    rating: 5,
    tanggal: "28/04/2026",
    komentar: "Langganan tiap pulang kerja. Prasmanannya enak, topping bebas pilih.",
  },
  {
    nama: "Ratna",
    rating: 4,
    tanggal: "03/04/2026",
    komentar: "Paket kejunya juara. Pedasnya nendang tapi tetep enak dimakan.",
  },
];

const TICKER = [
  "kuah fresh tiap hari",
  "level pedas 1–10",
  "prasmanan racik sendiri",
  "sen–jum 10.00–21.00 · sab–min 11.00–21.00",
  "paket mulai 10rb",
];

/* Footer content from the original site's layout/footer.php */
const LOKASI = [
  {
    nama: "SMR 1 — Puspogiwang",
    maps: "https://maps.app.goo.gl/FUW451AwTCm39AsD6",
  },
  {
    nama: "SMR 2 — Panjangan",
    maps: "https://maps.app.goo.gl/oqVdN97bDuH83QdY9",
  },
];

const SOSIAL = [
  {
    nama: "Instagram",
    href: "https://www.instagram.com/seblakmamarizki_/",
  },
  {
    nama: "TikTok",
    href: "https://www.tiktok.com/@seblakmamarizki_/",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="text-[0.8rem] tracking-wider text-chili"
      aria-label={`${rating} dari 5 bintang`}
    >
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── masthead ─────────────────────────────────────────────────── */}
      <header className="border-b border-ink">
        <div className="mx-auto flex max-w-[880px] items-center justify-between gap-3 px-5 py-3.5">
          <span className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/logo/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <span className="font-display truncate text-[1.05rem] leading-tight sm:text-[1.2rem]">
              SeblakHOT MamaRizki
            </span>
          </span>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink shrink-0 rounded-full px-4 py-1.5 text-[0.85rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Pesan
          </a>
        </div>
      </header>

      <Hero />

      {/* ── ticker strip ─────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-line py-2.5">
        <div className="ticker-track flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {TICKER.map((item) => (
                <span
                  key={item}
                  className="kicker flex items-center gap-3 px-5 text-ink-soft"
                >
                  {item}
                  <span className="text-chili">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 · paket seblak ────────────────────────────────────────── */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[880px]">
          <div className="flex items-baseline gap-3 border-b border-ink pb-3">
            <span className="kicker text-chili">02</span>
            <h2 className="font-display text-[clamp(1.9rem,7.5vw,2.8rem)] leading-none">
              Paket Seblak
            </h2>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
            Paket mulai <strong className="text-price">Rp 10.000</strong> ·
            Prasmanan Sederhana <strong className="text-price">Rp 8.000</strong>{" "}
            · Spesial <strong className="text-price">Rp 12.000</strong>
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
            {PAKET.map((p, i) => (
              <li
                key={p.nama}
                className={i === 0 ? "col-span-2 sm:col-span-1" : ""}
              >
                <div className="border-t border-ink pt-3">
                  <span className="kicker text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className={`relative mt-3 w-full overflow-hidden bg-paper-deep ${
                    i === 0
                      ? "aspect-[16/10] sm:aspect-[4/3]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={p.foto}
                    alt={p.nama}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 100vw, 33vw"
                        : "(max-width: 640px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <p className="text-[0.92rem] font-semibold leading-tight">
                    {p.nama}
                  </p>
                  {p.harga && (
                    <span className="shrink-0 text-[0.82rem] font-bold text-price">
                      {p.harga}
                    </span>
                  )}
                </div>
                <a
                  href={waOrder(p.nama)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${p.nama} via WhatsApp`}
                  className="kicker mt-2 inline-block border-b border-chili pb-0.5 text-chili transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  Pesan →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 03 · prasmanan ───────────────────────────────────────────── */}
      <section className="border-y border-line bg-paper-deep px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[880px]">
          <div className="flex items-baseline gap-3 border-b border-ink pb-3">
            <span className="kicker text-chili">03</span>
            <h2 className="font-display text-[clamp(1.9rem,7.5vw,2.8rem)] leading-none">
              Prasmanan — racik sendiri
            </h2>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
            Sederhana <strong className="text-price">Rp 8.000</strong> · Spesial{" "}
            <strong className="text-price">Rp 12.000</strong> — pilih topping
            favoritmu:
          </p>

          <ul className="mt-9 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6">
            {TOPPINGS.map((t) => (
              <li key={t.nama} className="flex flex-col items-center">
                <div className="relative aspect-square w-full overflow-hidden rounded-full border border-ink bg-paper">
                  <Image
                    src={t.foto}
                    alt={t.nama}
                    fill
                    sizes="(max-width: 640px) 33vw, 17vw"
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 text-center text-[0.78rem] font-semibold leading-tight">
                  {t.nama}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 04 · ulasan — pull quotes ────────────────────────────────── */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[880px]">
          <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <div className="flex items-baseline gap-3">
              <span className="kicker text-chili">04</span>
              <h2 className="font-display text-[clamp(1.9rem,7.5vw,2.8rem)] leading-none">
                Ulasan
              </h2>
            </div>
            <span className="kicker text-ink-soft">(3 ulasan)</span>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {ULASAN.map((u) => (
              <figure key={u.nama} className="border-t-2 border-chili pt-5">
                <blockquote className="font-display text-[1.25rem] italic leading-snug sm:text-[1.35rem]">
                  “{u.komentar}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-[0.85rem] font-bold">{u.nama}</span>
                  <span className="flex items-center gap-2">
                    <Stars rating={u.rating} />
                    <span className="text-[0.7rem] text-ink-soft">
                      {u.tanggal}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── footer — adapted from the original site's footer ─────────── */}
      <footer className="bg-ink px-5 pt-16 pb-8 text-paper sm:pt-20">
        <div className="mx-auto max-w-[880px]">
          <div className="text-center">
            <p className="kicker text-honey">Pesan sekarang</p>
            <h2 className="font-display mt-4 text-[clamp(2.4rem,9vw,4.2rem)] leading-[1]">
              Lapar?
              <br />
              <span className="italic">Tinggal chat.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[42ch] text-[1rem] leading-relaxed text-paper/85">
              Pesan sekarang, ambil sendiri atau diantar.
            </p>
            <div className="mt-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-honey inline-block rounded-full px-9 py-4 text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>

          {/* colophon — magazine back page */}
          <div className="mt-14 grid gap-10 border-t border-paper/20 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="kicker text-honey">Lokasi kami</h3>
              <ul className="mt-4 space-y-2.5 text-[0.92rem]">
                {LOKASI.map((l) => (
                  <li key={l.nama}>
                    <a
                      href={l.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/85 underline-offset-4 hover:text-honey hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
                    >
                      {l.nama}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="kicker text-honey">Jam buka</h3>
              <ul className="mt-4 space-y-2.5 text-[0.92rem] text-paper/85">
                <li className="flex justify-between gap-4">
                  <span>Senin – Jumat</span>
                  <span className="font-bold">10.00 – 21.00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sabtu – Minggu</span>
                  <span className="font-bold">11.00 – 21.00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="kicker text-honey">Ikuti kami</h3>
              <ul className="mt-4 space-y-2.5 text-[0.92rem]">
                {SOSIAL.map((s) => (
                  <li key={s.nama}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/85 underline-offset-4 hover:text-honey hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
                    >
                      {s.nama} — @seblakmamarizki_
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 border-t border-paper/20 pt-6 text-center text-[0.78rem] text-paper/60">
            © 2026{" "}
            <span className="font-bold text-paper/80">
              Seblak Mama Rizki™
            </span>{" "}
            · Semarang, Jawa Tengah
            <br />
            <span className="mt-1 inline-block">
              Made by Kelompok 2 X PPLG 3 SMKN 8 Semarang
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
