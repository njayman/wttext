import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from "react";
import TextArea from "../Components/TextArea";
/* import useWishHistory from "../hooks/useWishHistory"; */
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    /* const [history, setHistory] = useWishHistory(); */
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const router = useRouter();

    // console.log(buttonRef.current?.offsetHeight)
    const [loading, setloading] = useState<boolean>(false);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true);
        try {
            const response = await fetch("/api/makewish", {
                method: "POST",
                body: JSON.stringify({ content: message }),
            });
            const data = await response.json();
            if (data.wishId) {
                /* const newHistory = [...history, data.wishId]; */
                /* setHistory(newHistory); */
                router.push(`/${data.wishId}`)
            }
        } catch (error: unknown) {
            if (error) {
                setErrorMessage("An error occured");
            }
            setloading(false);
        } finally {
            setloading(false);
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
                    maxLength={300}
                />

                <span className={styles.count} style={{ bottom: `${String(buttonRef.current?.offsetHeight || 35)} px` }}>{message.length}/300</span>
                <button disabled={loading} ref={buttonRef} className={styles.wishbutton} type="submit">{loading ? ". . ." : "Generate"}</button>
                {errorMessage ? <p>{errorMessage}</p> : ""}
            </form>
        </>
    );
};

export default Home;
