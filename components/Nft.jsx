/* eslint-disable */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nft = ({nft}) =>{
	return(
		<div className='bigBox'>
			{nft.map((rec) => {
				const {id,name,image_url,token_id,traits} = rec;
				return(
					<article key={id} className="nftbox">
                        <img className="nftimg" src={image_url}/>
                            {name}<br/>
                            ID:{token_id}
                            <hr/>
							{traits[0].value}
							<br/>
							{traits[1].value}
							<br/>
							<Link href="/gpay"><a><Image id="gpay" src="./assets/gpay.jpg" alt="google pay"/></a></Link>
					</article>
				)
			})}
		</div>
	)
}

// const recipeCat = ({recipe}) => {
// 	console.log(typeof recipe)
// 	const [id, name] = recipe;
// 	function Recipe(){
// 		return(
// 			<div className='firstBox'>
// 				<article key={id}>
// 					<div>
// 						{name}
// 					</div>
// 				</article>
// 			</div>
// 		)
// 	}

//     return(
// 		Recipe()
// 	)
// }

export default nft
