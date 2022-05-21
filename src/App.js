import React from 'react';
import './App.css';
import Planet from './Planet';

function App()
{
  return(
    <>
      <header className="flex">
        <h1>Assignment Title : <span>Components & Props</span></h1>
      </header>

      <main className="flex">
        <Planet planetName="Mercury" planetMoons={0} />
        <Planet planetName="Venus" planetMoons={0} />
        <Planet planetName="Earth" planetMoons={1} />
        <Planet planetName="Mars" planetMoons={2} />
        <Planet planetName="Jupiter" planetMoons={80} />
        <Planet planetName="Saturn" planetMoons={83} />
        <Planet planetName="Uranus" planetMoons={27} />
        <Planet planetName="Neptune" planetMoons={14} />
      </main>
    </>
  );
}

export default App;