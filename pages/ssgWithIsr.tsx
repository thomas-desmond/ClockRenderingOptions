import { GetStaticProps } from 'next';
import { IssData } from '../interfaces/iss';
import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch('http://api.open-notify.org/iss-now.json')
    const data: IssData = await response.json()
  
    return { props: { data }, revalidate: 15 }
}

function ssgWithIsr({ data }: { data: IssData }) {
    return (
        <main className={styles.center}>
            <h1>SSG with Incremental Static Regeneration (ISR)</h1>
            <h3>{data?.iss_position?.latitude}</h3>
            <h3>{data?.iss_position?.longitude}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleDateString()}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleTimeString()}</h3>
        </main>
    )
}

export default ssgWithIsr;