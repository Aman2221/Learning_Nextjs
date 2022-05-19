import Link from "next/link"
import Head from "next/head"

const errorPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <h1>This is an Custom Error Page</h1>
      <Link href='/'>
          <button>
              Back to home page
          </button>
      </Link>
    </>
  )
}

export default errorPage