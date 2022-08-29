import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import WishModel from "../models/wish.model";
import { useEffect, useState } from "react";
import styles from '../styles/Wish.module.css';
import connectDB from "../lib/dbConnect";
import TextArea from "../Components/TextArea";
import CopyButton from "../Components/CopyButton";
import confetti from "canvas-confetti";

interface Props {
    message: string;
    shareLink: string;
}

const Wish: NextPage<Props> = (props) => {
    const [wish] = useState(props.message.split(''));
    const [typeWish, setTypeWish] = useState<string>('')
    const updateWish = () => {
        if (typeWish.length < wish.length) {
            setTypeWish((prevTypeWish) => prevTypeWish + wish[typeWish.length]);
        }
    }

    useEffect(() => {
        if (typeWish.length === wish.length)
            confetti()
    }, [typeWish, wish])

    return (
        <>
            <div className={styles.wishform}>
                <TextArea
                    value={typeWish}
                    onChange={updateWish}
                    placeholder="Type your message here . . . "
                    rows={8}
                    autoFocus
                    spellCheck={false} />
            </div>
            <Link href="/">
                <a className={styles.wishlink}>Create another!!</a>
            </Link>
            <CopyButton className={styles.wishshare} value={props.shareLink} >  Share with your friends!</CopyButton>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    await connectDB();
    const wish = await WishModel.findOne({ wishId: context.params?.wishId });
    const shareLink = `${context.req.headers['host']}/${context.params?.wishId}`;
    try {
        if (!wish) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                message: wish.content,
                shareLink
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}

export default Wish;
