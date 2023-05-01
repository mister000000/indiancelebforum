import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Indian Celeb Forum</title>
        <meta name="description" content="Indian Celeb Forum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome</h1>
        <h2>Work still being done on UI.</h2>
        <input type="button" onClick={() => router.push("/gallery/UHQ")} value="UHQ Gallery" />
        <input type="button" onClick={() => router.push("http://www.reddit.com/r/indiancelebforum")} value="Go to subreddit" />
      </main>
    </>
  )
}
