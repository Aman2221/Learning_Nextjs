import About from '../../components/About'
import styles from '../../styles/aboutCSS/about.module.css'
import Head from 'next/head'
import Image from 'next/Image'

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
       <div className="aboutContainer">
        <About />
        <h2 className={styles.h2homeColor}>This is Styles red color about page same class</h2>
        <Image src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?' width='300' height='400' />
      </div>
    </>
   
  )
}


export default about
