import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {

    const date = Date.now();

    return {
        props: { date },
        revalidate: 10
    };
}

function ssgWithIsr({ date }: { date: Date }) {
    return (
        <div>
            {date}
        </div>
    )
}

export default ssgWithIsr;