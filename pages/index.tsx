import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [message, setMessage] = useState<string>("");

    const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/makewish')
            const data = await response.json();
            console.log(data);
        } catch (error: unknown) {
            if (error) {
                console.log('An error occured');
            }
        }
    };
    return (
        <div className={styles.page}>
            <Head>
                <title>What the Text!</title>
                <meta name="description" content="What the text web app for fun!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading}>What the text</h1>
            <span className={styles.subtitle}>Let your friends type out the words of your mind!</span>
            <form className={styles.wishform} onSubmit={handleSubmit}>
                <textarea
                    className={styles.wisharea}
                    onChange={handleChange}
                    value={message}
                    rows={8}
                    placeholder="Type your message here . . . "
                    autoFocus
                    spellCheck={false}
                />
            </form>
        </div>
    );
};

export default Home;
