import type { NextPage } from "next";
import Head from "next/head";

const Wish: NextPage = () => {
    return (
        <div>
            <Head>
                <title>What the Text!</title>
                <meta name="description" content="What the text web app for fun!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div contentEditable>
            </div>
        </div>
    )
}

export default Wish;
