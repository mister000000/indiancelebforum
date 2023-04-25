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
        <span>You are few days too early.</span>
        <button className={"button"} onClick={() => router.push("http://www.reddit.com/r/indiancelebforum")}>Go to subreddit</button>
      </main>
    </>
  )
}
