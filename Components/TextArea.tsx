import { FC, TextareaHTMLAttributes } from 'react';
import styles from '../styles/TextArea.module.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const TextArea: FC<TextAreaProps> = (props) => {
    return (
        <textarea className={styles.wisharea} {...props} />
    )
}

export default TextArea;
