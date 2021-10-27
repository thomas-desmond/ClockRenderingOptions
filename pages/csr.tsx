import useSWR from 'swr'

export default function Csr() {
    
    let date = new Date();

    return (
        <div>{date.toLocaleString()}</div>
    )
}