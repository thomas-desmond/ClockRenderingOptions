import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
    
    const date = Date.now();

    return {
        props: { date }
    };
}

function Ssr({ date }: { date: Date }) {
    return (
        <div>
            {date}
        </div>
    )
}

export default Ssr;