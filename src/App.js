function App() {
  const person = [
    {
      name: 'Lucas',
      grade: 3
    },
    {
      name: 'Camila',
      grade: 8
    },
    {
      name: 'Caio',
      grade: 5
    },
    {
      name: 'Julia',
      grade: 9
    }
  ];

  return(
    <div className=''>
      <h1>Status dos alunos</h1>
      <ul>
        {person.map(person => (
          <li>{person.name} - {person.grade >= 7 ? 'Aprovado' : 'Reprovado'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
