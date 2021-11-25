import { useEffect, useState } from 'react';
import { IssData } from '../interfaces/iss';
import styles from '../styles/Home.module.css'

export default function Csr() {

    const [data, setData] = useState<IssData>({} as IssData);   
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
            const data: IssData = await response.json()
            console.log(data);
            setData(data)
        }
        getData()
    }, [])

    return (
        <main className={styles.center}>
            <h1>Client Side Rendering (CSR)</h1>
            <h3>Latitude: {data?.latitude}</h3>
            <h3>Longitude: {data?.longitude}</h3>
            <h3>{new Date(data?.timestamp * 1000).toLocaleDateString()}</h3>
            <h3>{new Date(data?.timestamp * 1000).toLocaleTimeString()}</h3>
        </main>
    )
}