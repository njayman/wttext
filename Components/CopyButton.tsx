import { ButtonHTMLAttributes, FC, MouseEvent, useState } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const CopyButton: FC<Props> = ({ children, ...props }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(e.currentTarget.value);
        setCopied(true);
        setInterval(() => {
            setCopied(false);
        }, 5000)
    }
    return <button {...props} onClick={handleCopy}>{copied ? "Copied" : children}</button>;
};

export default CopyButton;
