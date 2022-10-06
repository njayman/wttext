import { useEffect, useState } from "react";

const useWishHistory = () => {
    const [history, setHistory] = useState<string[]>([]);
    useEffect(() => {
        if (window?.localStorage) {
            setHistory(JSON.parse(localStorage.getItem("wttext-history") as string || "[]"))
        }
        else {
            setHistory([])
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("wttext-history", JSON.stringify(history));
    }, [history])
    return [history, setHistory] as const;
}

export default useWishHistory;
