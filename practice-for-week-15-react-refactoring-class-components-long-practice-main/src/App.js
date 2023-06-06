import React from 'react';

import  { Clock, ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';
import { useState } from 'react';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const App = () => {

    const [showClock,setshowClock] = useState(true);

    const toggleClock = (e) => {
        e.preventDefault();
        // setshowClock(!showClock);
        setshowClock(prev => !prev);
    }

    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={toggleClock}/>
        {showClock && (<Clock/>)}
        <Autocomplete names={names} />
      </div>
    )
}



export default App;