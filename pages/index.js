/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import { useAppContext } from "../context/AppContext";


export default function Home() {
    const { state, dispatch } = useAppContext();
    return (
    <div className="container">
      <Head>
        <title>PixelTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <div id="homeimgdiv">
          <img id="homeimg" src="./assets/logo.png" alt="PixelTs"/>
        </div>
        <div id="hometitle">Welcome to PixelTs</div><br/>
        <div className="defaultBox">
          PixelTs is an NFT web store where you can browser a various amount of NFts. Not just any NFTs, we specialize in pixel NFTs for those who find it either hard,annoying or tedious of finding the good ones, our inventory rotates once a week so make sure to check what we have as it will change in the near future. All of our NFTs are legit and are copyrighted.
        </div>
      </main>
    </div>
  )
}
