import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>AQUI ESTOY</h1>

      </header>
    </div>
  );
}

export default App;
