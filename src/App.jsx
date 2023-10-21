import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
function App() {
  const [users, setUsers] = useState({
    info: {},
    results: [],
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUserRequest = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character?' +
            new URLSearchParams({ page })
        );
        const result = await response.json();
        setUsers(result);
      } catch (error) {}
    };
    getUserRequest();
  }, [page]);

  return (
    <div className="App">
      {users.results.map(
        (user) =>
          console.log(user) || (
            <Card
              key={user.id}
              name={user.name}
              origin={user.origin}
              status={user.status}
              type={user.type}
              url={user.image}
            />
          )
      )}
      <h1 id="prevText">{page}</h1>
      <h1 id="next">Page</h1>
      <button
        id="wrapper"
        onClick={() => {
          if (page > 1) {
            setPage((prev) => prev - 1);
          } else {
            alert('Достигнута первая страница');
          }
        }}
      >
        Prev
      </button>
      <button
        id="wrapper"
        onClick={() => {
          if (page < 42) {
            setPage((prev) => prev + 1);
          } else {
            alert('Достигнута последняя страница');
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
