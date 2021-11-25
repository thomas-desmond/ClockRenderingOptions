import { useEffect, useState } from 'react';
import { IssData } from '../interfaces/iss';
import styles from '../styles/Home.module.css'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

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

            <ComposableMap className={styles.map}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                    }
                </Geographies>
                <Marker coordinates={[data?.latitude, data?.longitude]}>
                    <circle r={15} fill="#F53" />
                </Marker>
            </ComposableMap>
        </main>
    )
}