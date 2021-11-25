import { GetServerSideProps } from 'next'
import { IssData } from '../interfaces/iss';
import styles from '../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data: IssData = await response.json()
  
    return { props: { data } }
}

function Ssr({ data}: { data: IssData }) {
    return (
        <main className={styles.center}>
            <h1>Server Side Rendering (SSR)</h1>
            <h3>Latitude: {data?.latitude}</h3>
            <h3>Longitude: {data?.longitude}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleDateString()}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleTimeString()}</h3>
        </main>
    )
}

export default Ssr;