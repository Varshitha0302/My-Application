import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React App</h1>
        <div>
          {data ? (
            <div>
              <h2>Data from Backend:</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

