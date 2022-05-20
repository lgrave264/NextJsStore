import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                            <li className='links'><a href="/">Homepage</a></li>
                            <li className='links'><a href="/store">Store</a></li>
                            <li className='links'><a href="/login">Login</a></li>
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
