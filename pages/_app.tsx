import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import styles from "../styles/App.module.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={styles.page}>
            <Head>
                <title>What the Text!</title>
                <meta name="description" content="What the text web app for fun!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading}>
                {["WHAT", "THE", "TEXT"].map((words, key) => {
                    return (
                        <span className={styles.word} key={key}>
                            {words.split("").map((letter, keys) => (
                                <div className={styles.letter} key={keys}>
                                    {letter}
                                </div>
                            ))}
                        </span>
                    );
                })}
            </h1>
            <span className={styles.subtitle}>
                Let your friends type out the words of your mind!
            </span>
            <Component {...pageProps} />
            <span className={styles.creator}>
                Created by{" "}
                <Link href="https://github.com/njayman">
                    <a target="_blank" rel="noopener noreferrer">
                        Najish Mahmud
                    </a>
                </Link>
            </span>
        </div>
    );
}

export default MyApp;
