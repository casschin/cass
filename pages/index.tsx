import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cass</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <main className={styles.main}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="cass-logo"
          viewBox="0 0 400 400"
          className={styles.logo}
        >
          <title id="cass-logo">Cass logo</title>
          <circle cx="200" cy="200" r="200" />
          <circle cx="200" cy="200" r="170" fill="#fff" />
          <circle cx="200" cy="200" r="130" />
          <circle cx="200" cy="200" r="100" fill="#fff" />
          <circle cx="200" cy="200" r="64" />
          <rect x="255" y="180" fill="black" width="140" height="40" />
        </svg>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Cass</span>
          <span className={styles.titleSub}>Corp.</span>
        </h1>
      </main>
    </div>
  );
}
