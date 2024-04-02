/*import logo from './logo.svg';*/
import {useState} from 'react';
import './App.css';

const BaldursBattlers = [
  { id: 1, title: 'Gale', theme: 'Wizard', isAvailable: true },
  { id: 2, title: 'Astarion', theme: 'Rouge', isAvailable: true },
  { id: 3, title: 'Karlach', theme: 'Barbarian', isAvailable: true },
  { id: 4, title: 'Shadowheart', theme: 'Cleric', isAvailable: false },
];



function PartyComp() {
  const ListPartyMembers = BaldursBattlers.map(list =>
    <li
      key={list.id}
      style={{
        color: list.isAvailable ? 'blue' : 'red',
      }}
    >
      {list.title}
    </li>
  );
  
  return (
    <ul>{ListPartyMembers}</ul>
  )
}

function MagicButton() {
  const [count, setCount] = useState(0);

  function DoMagic() {
    let partyNames = ["Gale", "Astarion", "Shadowheart", "Karlach"];
    setCount(count + 1);
    let partyMemberFed = partyNames[Math.floor(Math.random() * partyNames.length)];
    alert('You just fed ' + partyMemberFed + ' a cookie');
  }

  return (
    <button onClick={DoMagic}>
      Party members fed {count} times!
    </button>
  );
}

const ThoughtBubbles = ['fighting a mind flayer', 'wanting to go to bed super bad', 'needing to pet Scratch and the owlbear cub']

function PartyThoughts(){
let randomThought = ThoughtBubbles[Math.floor(Math.random() * ThoughtBubbles.length)];
let randomNumber = (Math.floor(Math.random() * 4));
  return(
    <h2>{BaldursBattlers[randomNumber].title} is thinking about {randomThought}.</h2>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* <p>Edit <code>src/App.js</code> and save to reload. </p> */}

        <h1>Baldurs Gate Team Members: blue is on the team, red is on the bench!</h1>
        
        <PartyComp/>

        <MagicButton/>

        <PartyThoughts/>
      </header>
    </div>
  );
}

export default App;
