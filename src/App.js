// Define o componente funcional App
function App() {
  // Declaração de um array de objetos representando pessoas com nomes e notas
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

// Retorna o JSX para renderizar a interface
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
