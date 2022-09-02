import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState();
  const [tarefa, setTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [lista, setLista] = useState([]);


  function adicionar() {

    if (id) {
      const index = lista.findIndex(n => n.id === id);
      lista[index].tarefa = tarefa;
      lista[index].descricao = descricao;

      setLista([...lista]);

    } else {
      let descricoes = {
        id: Math.random().toString(36),
        tarefa: tarefa,
        descricao: descricao,

      };
  
      lista.push(descricoes);
      setLista([...lista]);
    }

    setId('');
    setTarefa('');
    setDescricao('');

  }

  function editar(id) {

    const descricoes = lista.find(n => n.id === id);
    setId(descricoes.id);
    setTarefa(descricoes.tarefa);
    setDescricao(descricoes.descricao);

  }

  function excluir(id) {

    const index = lista.findIndex(n => n.id === id);
    lista.splice(index, 1);
    setLista([...lista]);
  }


  return (
    <div className="container">
      <h1>LISTA DE TAREFAS</h1>
      <form className="row">

        <div className="col-md-12 mb-3">
          <label className="form-label">Tarefa</label>
          <input type="text" className="form-control" value={tarefa} onChange={(event) => setTarefa(event.target.value)} />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)} />
        </div>

        <div className='col-md-12' id="cadastrar">
        <button type="button" className="btn btn-primary " onClick={adicionar}>Cadastrar</button>
        </div>
        
      </form>

      <table className="table"  >
        <thead>
          <tr>
            <th className="editarCheckbox" ></th>
            <th>Tarefa</th>
            <th className="teste" >Descrição</th>
            <th className="editarEditarExcluir" ></th>
            <th className="editarEditarExcluir" ></th>
          </tr>
        </thead>
        <tbody>
          {
            lista.map((n, index) => {      return (

              <tr key={index} id="normal">
                <td className="editarCheckbox" >
                <input  type="checkbox" class="maior"/>
                </td>
                
                <td>{n.tarefa}</td>
                <td>{n.descricao}</td>

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
