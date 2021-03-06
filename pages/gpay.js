import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'



export default function Home() {
    return (
    <div className="container">
      <Head>
        <title>PixelTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="storemain">
        <div className='gpaymain'>
            <form>
            <p className="loginTitle">Payment</p>
            <hr/>
            <p className="gpaysmalltitle">NFT Code Number</p>
            <input type='text' className="gpayid" maxLength="4" placeholder="NFT ID#..."></input>
            <hr/>
            <p className="gpaysmalltitle">Contact Information</p>
            <input type='text' className="gpaycard" placeholder="First Name..."></input>
            <input type='text' className="gpaycard" placeholder="Last Name..."></input>
            <br/>
            <br/>
            <input type='text' className="gpaycard" placeholder="Email..."></input>
            <br/>
            <br/>
            <input type='text' className="gpaycard" placeholder="PhoneNumber..."></input>
            <br/>
            <hr/>
            <p className="gpaysmalltitle">Billing Address</p>
            <input type='text' className="gpayadd" placeholder="Address..."></input>
            <br/>
            <br/>
            <input type='text' className="gpayinput" placeholder="Zip Code..."></input>
            <br/>
            <br/>
            <input type='text' className="gpayinput" placeholder="State..."></input>
            <br/>
            <br/>
            <input type='text' className="gpayinput" placeholder="City..."></input>
            <hr/>
            <p className="gpaysmalltitle">Payment Information</p>
            <input type='text' className="gpaycard" placeholder="First Name..."></input>
            <input type='text' className="gpaycard" placeholder="Last Name..."></input>
            <br/>
            <br/>
            <input type='text' className="gpaycard" placeholder="Card Number..."></input>
            <br/>
            <br/>
            EXP:  <input type='date' className="gpayinput" placeholder="exp (##/##)"></input>
            <br/>
            <br/>
            <input type='text' className="gpaysec" maxLength="4" placeholder="Security Code..."></input>
            <hr/>
            <button id="loginButton">Submit</button>
            </form>
        </div>
      </main>
    </div>
  )
}
