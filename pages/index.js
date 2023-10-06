import Head from "next/head";
import Landing from "../components/sections/Landing";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deez Games</title>
        <meta name="description" content="The official website of Deez Games. The creators of Gauntler and Babushcats games." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <MainSection />
    </>
  );
}
