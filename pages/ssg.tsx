import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return {
        props: { date, time }
    };
}

function Ssg({ date, time }: { date: string, time: string }) {
    return (
        <div className={styles.clock}>
            {date} {time}
        </div>
    )
}

export default Ssg;