import React from 'react'

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
							<a href="/gpay"><img id="gpay" src="./assets/gpay.jpg" alt="google pay"/></a>
							
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
