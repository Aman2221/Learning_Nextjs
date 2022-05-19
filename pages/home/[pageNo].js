import Link from 'next/link'
import Head from 'next/Head'
import { useRouter } from 'next/router'
const pageNo = () => {

    const router = useRouter();
    const route = router.query.pageNo;
    return (
        <>
            <Head>
                Dynamic Routing
            </Head>
            <button onClick={() => { router.push('/home/home')}}>Back To Home</button>
            <Link href='/home/about'>
                <button>Back To About : {route}</button>
            </Link>
        </>
    );
};

export default pageNo;