import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import data from "@/data.json";

type Couple = { name: string; nickname: string; parents: string; instagram?: string; };
const groom = data.groom as Couple;
const bride = data.bride as Couple;
const weddingDate = new Date(data.event.isoDate);

function OrnamentalDivider() {
  return <div className="ornament" aria-hidden="true"><span />❧<span /></div>;
}
function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}<OrnamentalDivider /></div>;
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const countdown = useMemo(() => {
    const distance = Math.max(0, weddingDate.getTime() - now);
    return [Math.floor(distance / 86400000), Math.floor(distance / 3600000) % 24, Math.floor(distance / 60000) % 60, Math.floor(distance / 1000) % 60];
  }, [now]);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsapp = (message: string) => `https://wa.me/${data.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  const copy = async (value: string) => {
    try { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.prompt("Salin teks berikut:", value); }
  };

  return <>
    <Head>
      <title>{`Pernikahan ${groom.name} & ${bride.name} | ULEM`}</title>
      <meta name="description" content={`Undangan pernikahan ${groom.name} dan ${bride.name}. Dengan penuh rasa syukur, kami mengundang Anda untuk hadir.`} />
      <meta name="theme-color" content="#493329" />
      <meta property="og:title" content={`${groom.name} & ${bride.name} — Wedding Invitation`} />
      <meta property="og:description" content={data.event.dateLabel} />
    </Head>
    <main className="site-shell">
      <section className={`cover ${opened ? "cover-opened" : ""}`} id="home">
        <div className="cover-image" />
        <div className="cover-shade" />
        <div className="cover-frame">
          <div className="cover-brand">U L E M <i>•</i> UNDANGAN DIGITAL</div>
          <div className="cover-center">
            <span className="eyebrow light">THE WEDDING OF</span>
            <div className="cover-flourish">❧</div>
            <h1>{groom.nickname}<span>&</span>{bride.nickname}</h1>
            <p className="cover-date">{data.event.dateLabel}</p>
            <div className="cover-rule" />
            <p className="cover-guest">Kepada Yth.<br /><strong>Bapak/Ibu/Saudara/i</strong></p>
            <button className="button button-light" onClick={() => { setOpened(true); document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" }); }}>Buka Undangan <span>↗</span></button>
          </div>
          <div className="cover-bottom">A CELEBRATION OF LOVE · {data.event.year}</div>
        </div>
      </section>

      <div className="invitation-content" id="invitation">
        <nav className="top-nav"><a href="#home" className="nav-mark">ULEM</a><div><a href="#mempelai">Mempelai</a><a href="#acara">Acara</a><a href="#galeri">Galeri</a><a href="#rsvp">RSVP</a></div></nav>
        <section className="intro section-pad">
          <span className="eyebrow">ASSALAMUALAIKUM WARAHMATULLAHI WABARAKATUH</span>
          <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
          <p className="intro-copy">Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
          <OrnamentalDivider />
          <p className="verse">“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri...”</p>
          <span className="verse-ref">QS. Ar-Rum: 21</span>
        </section>

        <section className="couple-section section-pad" id="mempelai">
          <SectionTitle eyebrow="DENGAN PENUH CINTA" title="Kedua Mempelai" subtitle="Dua hati, satu tujuan, dalam ikatan suci pernikahan." />
          <div className="couple-grid">
            <article className="person-card"><div className="person-photo photo-groom"><span>THE GROOM</span></div><h3>{groom.name}</h3><p>{groom.parents}</p>{groom.instagram && <a href={`https://instagram.com/${groom.instagram.replace('@','')}`} target="_blank" rel="noreferrer">{groom.instagram}</a>}</article>
            <div className="ampersand">&</div>
            <article className="person-card"><div className="person-photo photo-bride"><span>THE BRIDE</span></div><h3>{bride.name}</h3><p>{bride.parents}</p>{bride.instagram && <a href={`https://instagram.com/${bride.instagram.replace('@','')}`} target="_blank" rel="noreferrer">{bride.instagram}</a>}</article>
          </div>
        </section>

        <section className="countdown-section section-pad">
          <span className="eyebrow light">SAVE THE DATE</span><h2>Menuju Hari Bahagia</h2>
          <div className="countdown">{countdown.map((n,i)=><div className="count-box" key={i}><strong>{String(n).padStart(2,"0")}</strong><span>{["Hari","Jam","Menit","Detik"][i]}</span></div>)}</div>
          <p>{data.event.dateLabel}</p>
        </section>

        <section className="event-section section-pad" id="acara">
          <SectionTitle eyebrow="CATAT TANGGALNYA" title="Rangkaian Acara" subtitle="Dengan segala kerendahan hati, kami mengundang Anda untuk hadir." />
          <div className="event-grid">
            <article className="event-card"><span className="event-number">01</span><span className="eyebrow">MOMEN PERTAMA</span><h3>Akad Nikah</h3><div className="event-date">{data.event.akadDate}</div><p>{data.event.akadTime}</p><div className="event-line"/><strong>{data.event.venue}</strong><p>{data.event.address}</p><a className="text-link" href={data.event.mapsUrl} target="_blank" rel="noreferrer">Lihat Lokasi ↗</a></article>
            <article className="event-card"><span className="event-number">02</span><span className="eyebrow">MOMEN KEDUA</span><h3>Resepsi</h3><div className="event-date">{data.event.resepsiDate}</div><p>{data.event.resepsiTime}</p><div className="event-line"/><strong>{data.event.venue}</strong><p>{data.event.address}</p><a className="text-link" href={data.event.mapsUrl} target="_blank" rel="noreferrer">Lihat Lokasi ↗</a></article>
          </div>
          <a className="button button-brown" href={data.event.mapsUrl} target="_blank" rel="noreferrer">Petunjuk Arah <span>↗</span></a>
        </section>

        <section className="gallery-section section-pad" id="galeri">
          <SectionTitle eyebrow="CERITA KAMI" title="Galeri Momen" subtitle="Sepenggal kisah yang ingin kami bagikan bersama Anda." />
          <div className="gallery-grid">{[1,2,3,4,5,6].map((n)=><figure className={`gallery-item gallery-${n}`} key={n}><img src={`./assets/Gallery_Photo_${n}.png`} alt={`Momen pasangan ${n}`} loading="lazy" /></figure>)}</div>
          <p className="gallery-note">Foto pada template ini dapat diganti dengan foto kedua mempelai.</p>
        </section>

        <section className="gift-section section-pad" id="hadiah">
          <SectionTitle eyebrow="TANDA KASIH" title="Wedding Gift" subtitle="Doa restu Anda merupakan hadiah terindah bagi kami. Namun jika ingin berbagi tanda kasih, dapat melalui informasi berikut." />
          <div className="gift-card"><span className="eyebrow">BANK TRANSFER</span><h3>{data.gift.bank}</h3><div className="account-number">{data.gift.account}</div><p>a.n. {data.gift.accountName}</p><button className="button button-outline" onClick={() => copy(data.gift.account)}> {copied ? "Berhasil Disalin ✓" : "Salin Nomor Rekening"}</button></div>
        </section>

        <section className="rsvp-section section-pad" id="rsvp">
          <span className="eyebrow light">KONFIRMASI KEHADIRAN</span><h2>Merupakan Kehormatan<br />Bagi Kami</h2><p>Mohon konfirmasi kehadiran Anda melalui WhatsApp.</p>
          <a className="button button-light" href={whatsapp(`Assalamu'alaikum, saya ingin mengonfirmasi kehadiran pada pernikahan ${groom.name} & ${bride.name}.`)} target="_blank" rel="noreferrer">Konfirmasi via WhatsApp ↗</a>
          <div className="share-row"><button onClick={() => copy(shareUrl)}>{copied ? "Tautan tersalin ✓" : "Salin tautan undangan"}</button><a href={whatsapp(`Undangan pernikahan ${groom.name} & ${bride.name}: ${shareUrl}`)} target="_blank" rel="noreferrer">Bagikan undangan ↗</a></div>
        </section>

        <footer className="footer section-pad"><div className="footer-mark">ULEM</div><p>Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p><div className="footer-names">{groom.nickname} & {bride.nickname}</div><span className="eyebrow">TERIMA KASIH</span><small>© {data.event.year} ULEM Digital Invitation</small></footer>
      </div>
    </main>
  </>;
}
