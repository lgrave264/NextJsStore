import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import Store from '../components/Store'

export default function Home() {
    return (
    <div className="container">
        <Head>
            <title>UIL</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="storeMain">
            <Store/>
        </main>
    </div>
    )
}