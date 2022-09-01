import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState();
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [lista, setLista] = useState([]);


  function adicionar() {

    if (id) {
      const index = lista.findIndex(n => n.id === id);
      lista[index].nome = nome;
      lista[index].nota1 = nota1;

      setLista([...lista]);

    } else {
      let nota = {
        id: Math.random().toString(36),
        nome: nome,
        nota1: nota1,

      };
  
      lista.push(nota);
      setLista([...lista]);
    }

    setId('');
    setNome('');
    setNota1('');

  }

  function editar(id) {

    const nota = lista.find(n => n.id === id);
    setId(nota.id);
    setNome(nota.nome);
    setNota1(nota.nota1);

  }

  function excluir(id) {

    const index = lista.findIndex(n => n.id === id);
    lista.splice(index, 1);
    setLista([...lista]);
  }


  return (
    <div className="container">
      <h1>LISTA DE TAREFAAS</h1>
      <form className="row">
        <div className="col-md-12 mb-3">
          <label className="form-label">Tarefa</label>
          <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" value={nota1} onChange={(event) => setNota1(event.target.value)} />
        </div>


    

        <div className='col-md-12' id="cadastrar">
        <button type="button" className="btn btn-primary " onClick={adicionar}>Cadastrar</button>
        </div>
        
      </form>


      <table className="table"  >
        <thead>
          <tr>
            
            <th className="editar3" ></th>
            <th>Tarefa</th>
            <th className="teste" >Descrição</th>
  
            
            <th className="editar2" ></th>
            <th className="editar2" ></th>
          </tr>
        </thead>
        <tbody>

          {
            lista.map((n, index) => {      return (

              <tr key={index} id="normal">
                <td className="editar3" >
                <input  type="checkbox" class="maior"/>
                </td>
                <td>{n.nome}</td>
                <td>{n.nota1}</td>


                

                <td>
                  <button className="btn btn-primary" id="editar" onClick={() => editar(n.id)}>EDITAR</button>
                </td>



                <td>
                  <button className="btn btn-danger" id="excluir" onClick={() => excluir(n.id)}>EXCLUIR</button>
                </td>


              </tr>
              
            )

            })
          }
        </tbody>
      </table>

    </div>
   
  );    
}
export default App;
