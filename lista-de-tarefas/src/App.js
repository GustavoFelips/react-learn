import React, { useReducer, useState } from 'react';

// Tipos de funções
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

// Reducer (muda o estado)
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task === action.payload ? { ...task, concluida: !task.concluida } : task
        ),
      };
    default:
      return state;
  }
};

// Componente para adicionar uma nova tarefa
const AddTask = ({ dispatch }) => {
  const [descricao, setDescricao] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');
  
  const handleAddTask = () => {
    dispatch({
      type: ADD_TASK,
      payload: {
        descricao,
        dataConclusao: new Date(dataConclusao),
        concluida: false,
      },
    });
    setDescricao('');
    setDataConclusao('');
  };

  return (
    <div>
      <input
        type="text"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        placeholder="Descrição da tarefa"
      />
      <input
        type="date"
        value={dataConclusao}
        onChange={e => setDataConclusao(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

// Componente para exibir e interagir com as tarefas
const TaskList = ({ tasks, dispatch }) => {
  const handleRemoveTask = task => {
    dispatch({ type: REMOVE_TASK, payload: task });
  };

  const handleToggleTask = task => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.concluida}
              onChange={() => handleToggleTask(task)}
            />
            <span>{task.descricao}</span>
            <span> - Data de Conclusão: {task.dataConclusao.toLocaleDateString()}</span>
            <button onClick={() => handleRemoveTask(task)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente principal 
const App = () => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <div>
      <AddTask dispatch={dispatch} />
      <TaskList tasks={state.tasks} dispatch={dispatch} />
    </div>
  );
};

export default App;
