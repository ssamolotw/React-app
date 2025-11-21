import './App.css';

function App() {
  const name = 'Ksawery';
  const names = ['ADRIAN', 'MACIEJ', 'PAWEL', 'BARBARA','ZOFIA','MARCEL'];  
  return (
    <>
    <div className="App">
        <p>
          {name.length > 4 ? name : 'Hello friends'}
        </p>
        <p>{ names.map((name) => <li key={name}>{name}</li>)}</p>
    </div>
    
    </>
  );
}

export default App;
