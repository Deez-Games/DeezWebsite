import Head from "next/head";
import Landing from "../components/sections/Landing";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deez Games</title>
        <meta
          name="description"
          content="The official website of Deez Games. The creators of Gauntler and Babushcats games."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://deez-games.github.io/DeezWebsite/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://deez-games.github.io/DeezWebsite/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://deez-games.github.io/DeezWebsite/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://deez-games.github.io/DeezWebsite/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://deez-games.github.io/DeezWebsite/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Landing />

      <MainSection />
    </>
  );
}
