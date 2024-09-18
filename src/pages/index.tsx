import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import VoiceAssistant from './components/VoiceAssistant/VoiceAssistant.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Voice Assistant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <VoiceAssistant/>
      </main>
    </>
  )
}
