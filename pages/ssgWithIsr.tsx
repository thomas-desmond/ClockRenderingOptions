import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return {
        props: { date, time },
        revalidate: 10
    };
}

function ssgWithIsr({ date, time }: { date: string, time: string }) {
    return (
        <div className={styles.clock}>
            <div>SSG w/ ISR</div>
            {date} {time}
        </div>
    )
}

export default ssgWithIsr;