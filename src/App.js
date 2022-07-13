import { useState } from 'react';
import ListItem from './components/ListItem';
import {
  BackgroundDiv,
  ContentDiv,
  DivButton,
  DivList,
  DivText,
  Title,
} from './styles';

function App() {
  const ListLocalStorage = JSON.parse(localStorage.getItem('tarefas') || '[]');
  const [list, setList] = useState(ListLocalStorage);
  //Criar um state para controlar o valor do input

  const [inputValue, setInputValue] = useState('');

  const addTask = (listaAtual) => {
    listaAtual.push(inputValue);
    setList(listaAtual);
    setInputValue('');
    localStorage.setItem('tarefas', JSON.stringify(listaAtual));
  };
  //Criar método addTask que adiciona uma task
  const deleteItem = (listaAtual, atividade) => {
    listaAtual = listaAtual.filter((item) => item !== atividade);
    localStorage.setItem('tarefas', JSON.stringify(listaAtual));
    return listaAtual;
  };

  return (
    <BackgroundDiv>
      <ContentDiv>
        <Title>Lista de Atividades</Title>

        <div>
          <DivText>
            <input
              value={inputValue}
              type="text"
              id="text"
              placeholder="Adicionar nova tarefa"
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
          </DivText>
          <DivButton>
            <button
              disabled={!inputValue || inputValue?.length === 0}
              onClick={() => addTask(list)}
            >
              Adicionar
            </button>
          </DivButton>
        </div>

        <DivList>
          {list &&
            list.map((activity, index) => (
              <ListItem
                key={activity + index}
                activity={activity}
                deletar={() => {
                  const novaLista = deleteItem(list, activity);
                  setList(novaLista);
                }}
              />
            ))}
        </DivList>
      </ContentDiv>
    </BackgroundDiv>
  );
}

export default App;
