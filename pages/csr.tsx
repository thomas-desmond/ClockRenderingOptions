import useSWR from 'swr'
import styles from '../styles/Home.module.css'

export default function Csr() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return (
        <div className={styles.clock}>
            {date} {time}
        </div>
    )
}