import Home from '../../components/Home'
import Head from 'next/head'
import styles from '../../styles/homeCSS/home.module.css'
import Image from 'next/Image'

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return({
    props : {
      data : data
    }
  })
}

const home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
       <div className="homeContainer">
        {
          /*
          <Home />
          <Image src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?' width='100%' height='400' />
          */
        }
        {
          data.slice(0,10).map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.id}</h3>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            )
          })
        }
      </div>
    </>
   
  )
}

export default home