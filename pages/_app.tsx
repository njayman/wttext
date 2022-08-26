import '../styles/globals.css'
import Head from "next/head";
import type { AppProps } from 'next/app'
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={styles.page}>
            <Head>
                <title>What the Text!</title>
                <meta name="description" content="What the text web app for fun!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading}>What the text</h1>
            <span className={styles.subtitle}>
                Let your friends type out the words of your mind!
            </span>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
