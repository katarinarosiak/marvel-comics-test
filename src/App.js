import './App.css';
import {useState, useEffect} from 'react';
import apiClient from './services/ApiClient';
import Character from './components/Character';

function App() {
  const [ story, setStory ] = useState({});
  const [ characters, setCharacters ] = useState([]);
  const [ update, setUpdate ] = useState(false);

  const chooseRandom = (items) => {
    const randomItem = items[Math.floor(Math.random() * items.length)]; 
    return randomItem;
  }


  useEffect(() => {
    const fetchData = async () => {
      const name = "Iron Man";
      const { id: characterId } = await apiClient.fetchCharacter(name);
      const stories = await apiClient.fetchStories(characterId);
      const randomStory = chooseRandom(stories);
      const characterNames = randomStory.characters.items.map(
        (character) => character.name
      );
      const data = await Promise.all(
        characterNames.map((name) => {
          return apiClient.fetchCharacter(name);
        })
      );
      setStory(randomStory);
      setCharacters(data);
    };
    fetchData();
  }, []);

  const rerenderContent = (e) => {
    setUpdate(true);
  }


  if (!story.characters) return null;

  return (
    <div className="App">
      <div>
        <button className="show-story-btn" onClick={rerenderContent}>Show Another Story</button>
      </div>
      <div className="story-title">
        <h1 className="font-face-gm"><span className="text-span">Story Title:</span> {story.title}</h1>
      </div>
      <div className="description">
        <p className="font-face-gm"><span className="text-span">Story Description:</span> {story.description === "" ? "This story doesn't have a description." : story.description}</p>
      </div>
      <div className="character-title">
        <h2 className="font-face-gm">Characters in this story:</h2>
      </div>
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
      <div className="footer">Data provided by Marvel. © 2014 Marvel</div>
    </div>
  );
}

export default App;
