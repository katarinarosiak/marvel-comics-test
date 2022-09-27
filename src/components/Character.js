import React from 'react'

function Character({ character }) {
	const thumbnailSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	return (
		<div className="character-card">
			<img src={thumbnailSrc} alt="Nature" width="400" height="700"></img>
			<div className='intro'>
				<h2>{character.name}</h2>
				<p>{character.description === "" ? "This character doesn't have a description" : character.description}</p>
			</div>
		</div>
	)
}

export default Character;