import './App.css';
import DataCard from './DataCard';
import { useState } from 'react';

function App() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((error) => console.error(error));
  };



  return (
    <div className='App'>
      <div className="container mx-auto flex justify-center items-center pt-[150px]">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-l py-2 px-4 mr-0 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
          >
            Search
          </button>
        </form>

      </div>
      <div className='grid lg:grid-cols-4 mx-auto md:grid-cols-2 grid-cols-1 gap-5 mt-9 container'>
        {
          results?.map(product => <DataCard

            key={product._id}
            product={product}

          ></DataCard>)
        }
      </div>
    </div>
  );
}

export default App;
