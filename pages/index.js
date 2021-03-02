import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>S3 Static Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>This is a static S3 Website</h2> 
    </div>
  )
}
