import { useEffect, useState } from 'react';
import { IssData } from '../interfaces/iss';
import styles from '../styles/Home.module.css'

export default function Csr() {

    const [data, setData] = useState<IssData>({} as IssData);   
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://api.open-notify.org/iss-now.json')
            const data: IssData = await response.json()
            console.log(data);
            setData(data)
        }
        getData()
    }, [])

    return (
        <main className={styles.center}>
            <h1>Client Side Rendering (CSR)</h1>
            <h3>{data?.iss_position?.latitude}</h3>
            <h3>{data?.iss_position?.longitude}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleDateString()}</h3>
            <h3>{new Date(data.timestamp *1000).toLocaleTimeString()}</h3>
        </main>
    )
}