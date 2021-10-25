import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {

    const date = Date.now();

    return {
        props: { date }
    };
}

function Ssg({ date }: { date: Date }) {
    return (
        <div>
            {date}
        </div>
    )
}

export default Ssg;