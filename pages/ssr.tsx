import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async () => {
    
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return {
        props: { date, time }
    };
}

function Ssr({ date, time }: { date: string, time: string }) {
    return (
        <div className={styles.clock}>
            <div>SSR</div>
            {date} {time}
        </div>
    )
}

export default Ssr;