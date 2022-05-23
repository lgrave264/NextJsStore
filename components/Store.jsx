/* eslint-disable */
import {React, useState, useEffect} from 'react'
import Nft from './Nft';

const Content = () => {
    const [nft, setNft] = useState([])

    const axios = require("axios");

    const getNft= () => {
        const options = {
            method: 'GET',
            url: 'https://opensea13.p.rapidapi.com/assets',
            params: {
            collection_slug: 'cryptopunks',
            order_direction: 'asc',
            limit: '50',
            include_orders: 'false'
            },
            headers: {
            'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
            'X-RapidAPI-Key': '7a07494cf3mshf921222e65c9451p1b404ajsn45f1282f6be4'
            }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data.assets);
            setNft(response.data.assets)
        }).catch(function (error) {
            console.error(error);
        });
    }
    

	useEffect(()=>{
		getNft();
	},[])

	return(
		<Nft nft={nft}/>
	)
}


export default Content