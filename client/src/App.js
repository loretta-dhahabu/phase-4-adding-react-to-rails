import React, {useEffect} from 'react'
import './App.css';

function App ()
{
  useEffect( () =>
  {
    fetch( "/movies" )
      .then( ( response ) => response.json() )
    .then((movies)=> console.log(movies))
  }, [])
  return (
    <div className="App">
      <h1>Hello From React!</h1>
    </div>
  );
}

export default App;
