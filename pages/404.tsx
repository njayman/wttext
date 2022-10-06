import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/error.module.css';

const NotFound: NextPage = () => {
    return (
        <>
            <h1>404 - Page not found!</h1>
            <p>
                Either you have typed a wrong url or the message you generated have
                expired!
            </p>
            <Link href="/">
                <a className={styles.wishlink}>Back to home</a>
            </Link>
        </>
    );
};

export default NotFound;
