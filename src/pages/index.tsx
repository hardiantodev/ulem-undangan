import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Undangan Pernikahan ○○○ & ○○○" name="Title" />
        <meta
          content="Hari, tanggal dan waktu pernikahan"
          name="Description"
        />
        <meta content="Hari, tanggal dan waktu pernikahan" name="Keyword" />
        <meta property="og:title" content="Undangan Pernikahan ○○○ & ○○○" />
        <meta
          property="og:description"
          content="Hari, tanggal dan waktu pernikahan"
        />
        <meta
          property="og:url"
          content="https://username.github.io/repository-name/"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Undangan Pernikahan ○○○ & ○○○</title>
      </Head>
      <main>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Gallery />
        <Location />
        <CongratulatoryMoney data={JsonData} />
        <Share data={JsonData} />
        <Footer>© 2026 Undangan Pernikahan</Footer>
      </main>
    </>
  );
}
