import { FC } from 'react'
import useWishHistory from '../hooks/useWishHistory';

const History: FC = () => {
    const [history] = useWishHistory();
    return (
        <div>{history.map((h: string) => <p key={h}>{h}</p>)}</div>
    )
}

export default History;
