import './App.css';
import {useState, useEffect} from 'react';
import apiClient from './services/ApiClient';
import Character from './components/Character';

function App() {
	const [ story, setStory ] = useState({});
	const [ characters, setCharacters ] = useState([]);


	const chooseRandom = (items) => {
		const randomItem = items[Math.floor(Math.random() * items.length)]; 
		return randomItem;
	}

	useEffect(() => {
		const fetchData = () => {
			const name = 'Iron Man';
	
			apiClient.fetchCharacter(name)
				.then((response) => {
					const characterId = response.id;
					return characterId;
			}).then((id) => {
				apiClient.fetchStories(id)
					.then((stories) => {
						const randomStory = chooseRandom(stories);
						const characterNames = randomStory.characters.items.map(chracter => chracter.name);

						Promise.all(
							characterNames.map(async (name) => {
								return apiClient.fetchCharacter(name);
							})
						).then((data) => {
								setStory(randomStory);
								setCharacters(data);
							}
						);
					})
			})
		};

		fetchData();

	}, [])


  return (
    <div className="App">
			<div className="story-title">
				<h1>{story.title}</h1>
			</div>
			<p>{story.description}</p>
			<div className="characters">
			{
				characters.map(char => {
					return (
						<div key={char.id}>
							<Character character={char}/>
						</div>
					)
				})
			}
			</div>
    </div>
  );
}

export default App;
