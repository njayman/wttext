import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { FormEvent, useState } from "react";
import TextArea from "../Components/TextArea";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [message, setMessage] = useState<string>("");
    const router = useRouter();

    const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/makewish", {
                method: "POST",
                body: JSON.stringify({ content: message }),
            });
            const data = await response.json();
            if (data.wishId) {
                router.push(`/${data.wishId}`)
            }
        } catch (error: unknown) {
            if (error) {
                console.log("An error occured");
            }
        }
    };
    return (
        <>
            <form className={styles.wishform} onSubmit={handleSubmit}>
                <TextArea
                    onChange={handleChange}
                    value={message}
                    rows={8}
                    placeholder="Type your message here . . . "
                    autoFocus
                    spellCheck={false}
                />
                <button className={styles.wishbutton} type="submit">Generate</button>
            </form>
        </>
    );
};

export default Home;
