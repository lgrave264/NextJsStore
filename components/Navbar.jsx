/* eslint-disable */
import React, {useEffect, useState} from 'react'
import Small from './Small'
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [size, setSize] = useState('558.90');
    // var size = 558.9;

const checkSize = () => {
    setSize(window.innerWidth);
};

useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
}, []);

// const axios = require("axios");

// const options = {
//     method: 'GET',
//     url: 'https://opensea13.p.rapidapi.com/assets',
//     params: {
//     collection_slug: 'cryptopunks',
//     order_direction: 'desc',
//     limit: '20',
//     include_orders: 'false'
//     },
//     headers: {
//     'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
//     'X-RapidAPI-Key': '7a07494cf3mshf921222e65c9451p1b404ajsn45f1282f6be4'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data.assets);
// }).catch(function (error) {
//     console.error(error);
// });



const [toggle, setToggle] = useState(false);

    if(size < 558.40){
        return(
            <header>
                <ul className='navbar'>
                <li><img id="logoimg" src="./assets/logo.png" alt="PixelTs"/></li>
                    <li><button onClick={() => setToggle(!toggle)}id='menu'><AiOutlineMenu id="menubut" size={25} color={'darkred'}/></button></li>
                </ul>
                <Small toggle={toggle}/>
            </header>
        )
    }else{
        return (
            <header>
                <ul  className='navbar'>
                    <li><img id="logoimg" src="./assets/logo.png" alt="PixelTs"/></li>
                    <li className='links'><Link href="/"><a>Homepage</a></Link></li>
                    <li className='links'><Link href="/store"><a>Store</a></Link></li>
                    <li className='links'><Link href="/gpay"><a>Order</a></Link></li>
                    <li className='links'><Link href="/login"><a>Login</a></Link></li>
                </ul>
            </header>
        )
    }
}

export default Navbar
