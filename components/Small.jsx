import React from 'react';
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                            <li className='links'><Link href="/"><a>Homepage</a></Link></li>
                            <li className='links'><Link href="/store"><a>Store</a></Link></li>
                            <li className='links'><Link href="/gpay"><a>Order</a></Link></li>
                            <li className='links'><Link href="/login"><a>Login</a></Link></li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
}

export default Small
